const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const commandModel = require('../repositories/commands/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const validator = require('../utils/validator');
const { ERROR: httpError, SUCCESS: http } = require('../../../helpers/http-status/status_code');

const postArticlesData = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.data);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.PostArticles(result.data);
  };

  const sendResponse = async (result) => {
    result.err ? wrapper.response(res, 'fail', result, 'Articles Post') : wrapper.response(res, 'success', result, 'Articles Post', http.OK);
  };
  sendResponse(await postRequest(validatePayload));
};

const updateArticles = async (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const updateRequest = async (result, id) => {
    if (result.err) {
      return result;
    }
    return commandHandler.updateData(result, id);
  };

  const sendResponse = async (result) => {
    result.err ? wrapper.response(res, 'fail', result, 'Articles Post') : wrapper.response(res, 'success', result, 'Articles Post', http.OK);
  };
  sendResponse(await updateRequest(payload, id));
};

const deleteArticles = async (req, res) => {
  const { id } = req.params;
  const getData = async () => commandHandler.deleteArticles(id);
  const sendResponse = async (result) => {
    result.err ? wrapper.response(res, 'fail', result, 'Get Articles', httpError.NOT_FOUND) :
      wrapper.response(res, 'success', result, 'Get Articles', http.OK);
  };
  sendResponse(await getData());
};
const getArticles = async (req, res) => {
  const getData = async () => queryHandler.getArticles();
  const sendResponse = async (result) => {
    result.err ? wrapper.response(res, 'fail', result, 'Get Articles', httpError.NOT_FOUND) :
      wrapper.response(res, 'success', result, 'Get Articles', http.OK);
  };
  sendResponse(await getData());
};
const getSingleArticle = async (req, res) => {
  const { title } = req.params;
  const getData = async () => queryHandler.getSingleArticle(title);
  const sendResponse = async (result) => {
    result.err ? wrapper.response(res, 'fail', result, 'Get Articles', httpError.NOT_FOUND) :
      wrapper.response(res, 'success', result, 'Get Articles', http.OK);
  };
  sendResponse(await getData());
};

module.exports = {
  postArticlesData,
  getSingleArticle,
  getArticles,
  deleteArticles,
  updateArticles,
  // registerUser,
};
