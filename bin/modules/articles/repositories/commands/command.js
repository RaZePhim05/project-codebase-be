const ObjectId = require('mongodb').ObjectId;

class Command {
  constructor(db) {
    this.db = db;
  }

  async insertArticles(document) {
    this.db.setCollection('articels');
    const result = await this.db.insertOne(document);
    return result;
  }

  async updateArticles(payload, id) {
    this.db.setCollection('articels');
    const result = await this.db.upsertOne({ _id: ObjectId(id) }, { $set: payload });
    return result;
  }

  async deleteArticles(id) {
    this.db.setCollection('articels');
    const parameter = {
      _id: ObjectId(id),
    };
    const result = await this.db.deleteOne(parameter);
    return result;
  }
}

module.exports = Command;
