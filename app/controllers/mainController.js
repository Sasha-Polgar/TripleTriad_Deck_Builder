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

  addToDeck: async (req, res) => {
    const cardId = parseInt(req.params.id);
    console.log(req.session)
    if(!req.session.deck){
      req.session.deck = []
      console.log(req.session.deck)
    }
    const checkCard = req.session.deck.find(card => card.id === cardId);
    if(!checkCard && req.session.deck.length < 5) { // TODO ajouter si deck <5
      const card = await dataMapper.getCard(cardId);
      req.session.deck.push(card);
      console.log(req.session.deck);
      res.redirect('/deck');
    }
    else {
      res.redirect('/deck');
    }

  }
 
};

module.exports = mainController;
