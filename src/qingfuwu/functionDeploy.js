const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');

const deployList = [
  { path: '../config.js', name: 'config.js' },
  { path: '../evening.js', name: 'evening.js' },
  { path: '../getImage.js', name: 'getImage.js' },
  { path: '../getToken.js', name: 'getToken.js' },
  { path: '../morning.js', name: 'morning.js' },
  { path: './serve/getImageInfo.js', name: 'getImageInfo.js' },
  { path: './serve/noteEmail.js', name: 'noteEmail.js' },
  { path: './serve/passwd.js', name: 'passwd.js' },
  { path: './serve/restImage.js', name: 'restImage.js' },
];

const npmPackage = [
  { name: 'form-data', version: '^4.0.0' },
  { name: 'jsdom', version: '^19.0.0' },
  { name: 'node-fetch', version: '^3.2.3' },
];

async function uploadCode() {
  const creatFns = deployList.map(async (d) => {
    const code = await fs.readFileSync(path.join(__dirname, d.path), 'utf-8');
    console.log(code);
    return fetch('https://open.qingfuwu.cn/v1/services/xxxxxx/functions', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer icp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({
        name: d.name,
        code,
      }),
    }).then((d) => d.json());
  });
  Promise.all(creatFns).then((d) => console.log(d));
}

async function uploadPackage() {
  const creatDeps = npmPackage.map((d) =>
    fetch('https://open.qingfuwu.cn/v1/services/xxxxxx/packages/async', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer icp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      },
      body: JSON.stringify([d]),
    }).then((d) => d.json())
  );
  Promise.all(creatDeps).then((d) => {
    console.log(d);
  });
}

// uploadCode();
// uploadPackage();
