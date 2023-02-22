const Articles = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const user = new Articles(db);

const getArticles = async () => {
  const getData = async () => {
    const result = await user.getAllArticles();
    return result;
  };
  const result = await getData();
  return result;
};
const getSingleArticle = async (title) => {
  const getData = async () => {
    const result = await user.viewArticles(title);
    return result;
  };
  const result = await getData();
  return result;
};

module.exports = {
  getArticles,
  getSingleArticle,
};
