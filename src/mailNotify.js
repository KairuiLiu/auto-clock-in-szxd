const config = require('./config');

async function sendEmailCheck(context) {
  if (context.getRest) {
    if (config.environment === 'qingfuwu') {
      const restImg = require('./restImage');
      const rest = await restImg({});
      context.subject += ', 剩余图片: ' + rest.rest;
    } else if (config.environment === 'tencent') {
      const restImg = require('./tencent/server/restImage');
      const rest = await restImg({});
      context.subject += ', 剩余图片: ' + rest.rest;
    } else if (
      config.environment === 'github' &&
      config.imgPool.methods === 'github'
    ) {
      context.subject += ', 剩余图片: ' + config.githubRestImg;
    }
  }
  context.html = context.html || context.subject;
  if (config.resultEmail.qingMid)
    return await inspirecloud.middleware.sendEmail.sendEmail({
      ...config.resultEmail,
      ...context,
    });
  else return await sendEmail({ ...config.resultEmail, ...context });
}

async function sendEmail({
  subject,
  html,
  sender,
  senderPassword,
  saver,
  senderService,
}) {
  const nodemailer = require('nodemailer');
  const user = sender;
  const pass = senderPassword;
  const smtpTransport = nodemailer.createTransport({
    service: senderService,
    auth: { user, pass },
  });
  return smtpTransport.sendMail({
    from: `自动打卡< ${user} >`,
    to: `<${saver}>`,
    subject,
    html,
  });
}

module.exports = sendEmailCheck;
