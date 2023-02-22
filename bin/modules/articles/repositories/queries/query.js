const ObjectId = require('mongodb').ObjectId;

class Query {
  constructor(db) {
    this.db = db;
  }

  async findArticles() {
    this.db.setCollection('articels');
    const recordset = await this.db.findAllData('_id', 0);
    return recordset;
  }

  async findByTitle(title) {
    this.db.setCollection('articels');
    const parameter = {
      title: title,
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }
  async findById(id) {
    this.db.setCollection('articels');
    const parameter = {
      _id: ObjectId(id),
    };
    const recordset = await this.db.findOne(parameter);
    return recordset;
  }
}

module.exports = Query;
