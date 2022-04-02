const config = require('./config.js');

module.exports = async function(params, context) {
  if(params.p !== config.imgPool.qingfuwu.passwd)return {
    code: 1,
  }
  const files = await inspirecloud.db.table('_file');
  const img = await files.where().findOne();
  const url = img.url;
  if(await files.where().count()>1)
    await files.delete(img)
  return {
    code: 0,
    url: img.url,
  };
}