const config = require('./config');
const fetch = require('node-fetch');
const qingfuwu = require('./qingfuwu');

function reqImage(url) {
  return fetch(url)
    .then((res) => res.buffer())
    .then((buffer) => fileType(buffer));
}

function uploadImage(image, token) {
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
      body: `returnEntity=true&file=`,
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
      label:
        imgInfo.fileUniqueCode + imgInfo.fileContentType.replace('image/', '.'),
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
    console.log(imgInfo);
    return;
    return buildImageInfo(imgInfo);
  } else if (config.imgPool.methods === 'api') {
    const imageInfo = fetch(config.imgPool.api).then((d) => d.json());
    return buildImageInfo(imgInfo);
  } else if (config.imgPool.methods === 'qingfuwu') {
    const imgInfo = await qingfuwu.getImgInfo();
    return buildImageInfo(imgInfo);
  }
  return [];
}

module.exports = getImage;

getImage('5e5c0869-887c-4c31-b6b5-5d49e50deaaf');
