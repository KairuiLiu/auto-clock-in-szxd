const splitTime = 16.5; // 从何时开始调用程序即开始查寝. 例如16.5表示在16:30前执行函数则开始打卡, 16:30之后执行查寝
const config = require('./config');

async function app(event, context) {
  const t = new Date();
  t.setHours(t.getHours() + 8);
  if (t.getUTCHours() + t.getUTCMinutes() / 60 < splitTime) {
    const morning = require('./morning');
    return morning();
  } else {
    const evening = require('./evening');
    return evening();
  }
}

exports.main_handler = app;
