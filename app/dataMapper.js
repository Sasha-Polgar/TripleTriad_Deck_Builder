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

    if(searchedElement === 'null'){
    const query = `SELECT * FROM card WHERE element IS NULL`;
    const result = await database.query(query);
    console.log(result.rows)
    return result.rows;
    }
    else {
      const query = `SELECT * FROM card WHERE element = $1`;
      const result = await database.query(query, [searchedElement]);
      console.log(result.rows)
      return result.rows;
    }
  },

  async searchByLevel(searchedLevel) {
    const query = `SELECT * FROM card WHERE level = $1`;
    const result = await database.query(query, [searchedLevel]);
    console.log(result.rows)
    return result.rows;
  
  },

};


module.exports = dataMapper;
