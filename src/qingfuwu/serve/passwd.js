const config = require('./config.js');

module.exports = async function(params, context) {
  return {
    res: params.p === config.passwd
  };
}