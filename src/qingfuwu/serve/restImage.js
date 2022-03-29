module.exports = async function(params, context){
  const files = await inspirecloud.db.table('_file');
  const rest = await files.where().count()
  return {rest};
}
