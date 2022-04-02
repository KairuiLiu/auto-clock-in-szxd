const COS = require('cos-nodejs-sdk-v5');
const config = require('../../config');

async function removeImg(key) {
  const cos = new COS({
    SecretId: config.imgPool.tencentCOS.secretId,
    SecretKey: config.imgPool.tencentCOS.secretKey,
  });
  const res = await cos.deleteObject({
    Bucket: config.imgPool.tencentCOS.bucket,
    Region: config.imgPool.tencentCOS.region,
    Key: key,
  });
  return {
    code: res.statusCode === 204 ? 0 : 1,
  };
}

module.exports = removeImg;
