const COS = require('cos-nodejs-sdk-v5');
const config = require('../../config');

async function getRest() {
  let rest = 0;
  const cos = new COS({
    SecretId: config.imgPool.tencentCOS.secretId,
    SecretKey: config.imgPool.tencentCOS.secretKey,
  });
  await cos
    .getBucket({
      Bucket: config.imgPool.tencentCOS.bucket,
      Region: config.imgPool.tencentCOS.region,
      Prefix: config.imgPool.tencentCOS.prefix,
    })
    .then(
      (d) => {
        rest = d.Contents.length - 1;
      },
      () => {
        rest = -1;
      }
    );
  return { rest };
}

module.exports = getRest;
