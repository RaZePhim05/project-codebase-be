const User = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

const PostArticles = async (payload) => {
  const user = new User(db);
  const postCommand = async (payload) => user.postArticles(payload);
  return postCommand(payload);
};
const deleteArticles = async (payload) => {
  const user = new User(db);
  const deleteCommand = async (payload) => user.deleteArticles(payload);
  return deleteCommand(payload);
};
const updateData = async (payload, id) => {
  const user = new User(db);
  const updateCommand = async (payload, id) => user.updateArticles(payload, id);
  return updateCommand(payload, id);
};

// const registerUser = async (payload) => {
//   const user = new User(db);
//   const postCommand = async (payload) => user.register(payload);
//   return postCommand(payload);
// };

module.exports = {
  PostArticles,
  deleteArticles,
  updateData,
  // registerUser,
};
