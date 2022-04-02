const COS = require('cos-nodejs-sdk-v5');
const config = require('../../config');

async function getImgInfo() {
  try {
    const cos = new COS({
      SecretId: config.imgPool.tencentCOS.secretId,
      SecretKey: config.imgPool.tencentCOS.secretKey,
    });
    const info = await cos
      .getBucket({
        Bucket: config.imgPool.tencentCOS.bucket,
        Region: config.imgPool.tencentCOS.region,
        Prefix: config.imgPool.tencentCOS.prefix,
      })
      .then((d) => {
        if (d.Contents.length <= 1) throw new Error();
        return { len: d.Contents.length - 1, info: d.Contents[1] };
      });
    const url = await cos.getObjectUrl({
      Bucket: config.imgPool.tencentCOS.bucket,
      Region: config.imgPool.tencentCOS.region,
      Key: info.info.Key,
      Sign: true,
    });
    return {
      len: info.len,
      key: info.info.Key,
      url:
        url +
        (url.indexOf('?') > -1 ? '&' : '?') +
        'response-content-disposition=attachment',
    };
  } catch (error) {
    return { code: 1 };
  }
}

module.exports = getImgInfo;
