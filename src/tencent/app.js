exports.main_handler = async (event, context) => {
  const t = new Date();
  if (t.getUTCHours() + 8 >= 18) {
    const morning = require('./morning');
    return morning();
  } else {
    const evening = require('./evening');
    return evening();
  }
};
