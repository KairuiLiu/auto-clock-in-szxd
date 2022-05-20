const fs = require('fs');
var path = require('path');
const getToken = require('./getToken');
const config = require('./config.js');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function uploadImage(imgpath, token) {
  const { FormData } = await import('node-fetch');
  const { fileFromSync } = await import('node-fetch');
  const form = new FormData();
  const blob = fileFromSync(imgpath, 'image/png');
  form.append('returnEntity', 'true');
  form.append('file', blob);
  return fetch(
    'http://counselor.swu.edu.cn/gateway//fighter-attachment-manage/common/document/upload',
    {
      headers: {
        'cache-control': 'no-cache',
        'fighter-auth-token': token,
        pragma: 'no-cache',
      },
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: form,
    }
  ).then((d) => d.json());
}

function buildImageInfo(imgInfo) {
  return [
    {
      fileContentType: imgInfo.fileContentType,
      fileUniqueCode: imgInfo.fileUniqueCode,
      fileSize: imgInfo.fileSize,
      fastDFSThumbImagePath: imgInfo.fastDFSThumbImagePath,
      value: `/${imgInfo.fastDFSGroupName}/${imgInfo.fastDFSPath}`,
      label: imgInfo.fileUniqueCode + imgInfo.fastDFSPath.match(/\.[^\.]+$/)[0],
    },
  ];
}

async function getLocalImageInfo({ token }) {
  if (config.imgPool.methods !== 'github') {
    const token = await getToken();
    const imgInfo = await uploadImage(process.argv[2], token);
    console.log(buildImageInfo(imgInfo.data));
    return;
  } else {
    const imgFold = path.join(__dirname, './github/img');
    const imgs = fs.readdirSync(imgFold);
    const imgPath = path.join(imgFold, imgs[0]);
    const imgInfo = await uploadImage(imgPath, token);
    if (imgs.length > 1) fs.unlinkSync(imgPath);
    config.githubRestImg = Math.max(imgs.length - 1, 1);
    return imgInfo;
  }
}

(async () => {
  if (config.environment === 'local') await getLocalImageInfo();
})();

module.exports = getLocalImageInfo;
