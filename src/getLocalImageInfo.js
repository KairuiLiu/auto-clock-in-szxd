const getToken = require('./getToken');
const fs = require('fs');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function uploadImage(imgpath, token) {
  const { FormData } = await import('node-fetch');
  const { fileFromSync } = await import('node-fetch');
  const form = new FormData();
  const blob = fileFromSync(imgpath, 'image/png')
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

(async () => {
  const token = await getToken();
  const imgInfo = await uploadImage(process.argv[2], token);
  console.log(buildImageInfo(imgInfo.data));
})();
