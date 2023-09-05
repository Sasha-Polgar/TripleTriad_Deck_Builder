const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },

  researchedPageByElement: async (req,res) => {
    const searchedElement = req.query.element;
    console.log(req.query);
    const searchedCard = await dataMapper.searchByElement(searchedElement);
    res.render('researchedPage', {searchedCard});
  },

  researchedPageByLevel: async (req, res) => {
    const searchedLevel = req.query.level;
    console.log(req.query);
    const searchedCard = await dataMapper.searchByLevel(searchedLevel);
    res.render('researchedPage', {searchedCard});
  }

};

module.exports = searchController;