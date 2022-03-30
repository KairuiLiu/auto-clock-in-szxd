const config = require('./config');

module.exports = async function (params, context) {
  const res = await inspirecloud.middleware.chengem.sendMailer({
    userEailer: config.resultEmailQingfuwu.email,
    subject: params.info,
    context: params.context || params.info,
  });
  return {
    res,
  };
};
