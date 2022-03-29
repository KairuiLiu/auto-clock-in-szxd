const config = require('../../config');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getImgUrl(passwd) {
  return fetch(
    `${config.imgPool.qingfuwu.baseUrl}/getImageInfo?p=${passwd}`
  ).then((d) => d.json());
}

module.exports = getImgUrl;
