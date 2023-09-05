const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  async getCard(cardId) {
    const query = `SELECT * FROM card WHERE id = $1 `;
    const result = await database.query(query, [cardId]);
    return result.rows[0];
  },

  async searchByElement(searchedElement) {
    const query = `SELECT * FROM card GROUP BY $1`;
    const result = await database.query(query, [searchedElement]);
    return result.rows;
  }

};


module.exports = dataMapper;
