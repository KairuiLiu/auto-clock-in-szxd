const getToken = require('./getToken');
const fs = require('fs');
const FormData = require('form-data');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function uploadImage(image, token) {
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

(async () => {
  const token = await getToken();
  const image = fs.createReadStream(process.argv[2]);
  const imgInfo = await uploadImage(image, token);
  const imgInfoParams = (({
    fileContentType,
    fileUniqueCode,
    fileSize,
    fastDFSThumbImagePath,
    fastDFSGroupName,
    fastDFSPath,
  }) => ({
    fileContentType,
    fileUniqueCode,
    fileSize,
    fastDFSThumbImagePath,
    fastDFSGroupName,
    fastDFSPath,
  }))(imgInfo.data);
  console.log(imgInfoParams);
})();
