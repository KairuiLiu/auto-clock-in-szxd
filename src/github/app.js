const splitTime = 16.5; // 从何时开始调用程序即开始查寝. 例如16.5表示在16:30前执行函数则开始打卡, 16:30之后执行查寝
const fs = require('fs');
var path = require('path');
const config = require('../config');

(async () => {
  const t = new Date();
  t.setHours(t.getHours() + 8);
  let res;
  const tag =
    t.getUTCHours() + t.getUTCMinutes() / 60 < splitTime
      ? 'morning'
      : 'evening';
  const fname = `${t.getUTCFullYear()}-${t.getUTCMonth()+1}-${t.getUTCDate()}-${tag}`;
  const files = fs.readdirSync(path.join(__dirname, `./log`), 'utf8');

  if (files.indexOf(fname) !== -1) return;
  if (files.indexOf(`${fname}-FC`) !== -1) {
    const cnt = await fs.readFileSync(
      path.join(__dirname, `./log/${fname}-FC`),
      'utf8'
    );
    if (cnt.length >= config.githubTryCount) return;
  }

  if (tag === 'morning') {
    const morning = require('../morning');
    res = await morning();
  } else {
    const evening = require('../evening');
    res = await evening();
  }

  if (res?.code === 0) {
    fs.writeFileSync(path.join(__dirname, `./log/${fname}`), 'EXEC SUCCESS');
  } else {
    fs.appendFileSync(path.join(__dirname, `./log/${fname}-FC`), '.');
  }
})();
