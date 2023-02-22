const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Articles {
  constructor(db) {
    this.query = new Query(db);
  }

  async viewArticles(title) {
    const user = await this.query.findByTitle(title);
    if (user.err) {
      return wrapper.error(new NotFoundError('Can not find articles'));
    }
    const { data } = user;
    return wrapper.data(data);
  }

  async getAllArticles() {
    const user = await this.query.findArticles();
    if (user.err) {
      return wrapper.error(new NotFoundError(user.err));
    }
    const { data } = user;
    return wrapper.data(data);
  }
}

module.exports = Articles;
