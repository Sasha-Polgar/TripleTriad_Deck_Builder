const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);
router.get('/card/:id', mainController.cardPage);
router.get('/deck', mainController.deckPage);
router.get('/deck/:id', mainController.addToDeck);


module.exports = router;