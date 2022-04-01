async function sendEmailCheck(config, context) {
  if (config.qing) {
    if (context.getRest) {
      const restImg = require('./restImage');
      const rest = await restImg({});
      context.subject += rest.rest;
    }
    context.html = context.html || context.subject;
    return await inspirecloud.middleware.sendEmail.sendEmail({
      ...config,
      ...context,
    });
  } else {
    context.html = context.html || context.subject;
    return await sendEmail({ ...config, ...context });
  }
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
