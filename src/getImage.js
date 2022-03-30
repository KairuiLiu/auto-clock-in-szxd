const FormData = require('form-data');
const config = require('./config.js');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function reqImage(url) {
  const { File } = await import('node-fetch');
  return fetch(url)
    .then((d) => d.blob())
    .then((b) => new File([b], `${Math.random().toString(36).slice(-8)}.png`), {
      type: 'image/png',
    });
}

async function uploadImage(image, token) {
  const { FormData } = await import('node-fetch');
  const form = new FormData();
  form.append('returnEntity', 'true');
  form.append('file', image);
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

async function getImage(token) {
  if (config.imgPool.methods === 'urls')
    return buildImageInfo(
      config.imgPool.url[
        Number.parseInt(config.imgPool.url.length * Math.random(), 10)
      ]
    );
  else if (config.imgPool.methods === 'apiImg') {
    const image = await reqImage(config.imgPool.apiImg);
    const imgInfo = await uploadImage(image, token);
    return buildImageInfo(imgInfo.data);
  } else if (config.imgPool.methods === 'api') {
    const imageInfo = fetch(config.imgPool.api).then((d) => d.json());
    return buildImageInfo(imgInfo);
  } else if (config.imgPool.methods === 'qingfuwu') {
    const getImageInfo = require('./getImageInfo');
    const url = await getImageInfo({ p: config.imgPool.qingfuwu.passwd });
    if (url.code === 0) {
      const image = await reqImage(url.url);
      const imgInfo = await uploadImage(image, token);
      return buildImageInfo(imgInfo.data);
    }
  }
  return [];
}

module.exports = getImage;

