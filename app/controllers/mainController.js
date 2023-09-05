const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  cardPage: async (req, res) => {
    const cardId = parseInt(req.params.id);
    if(isNaN(cardId)) {return next()};

    try{
      card = await dataMapper.getCard(cardId);
      res.render('cardPage', {card});
    }

    catch {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  researchedPage: async (req, res) => {
    
  }

};

module.exports = mainController;
