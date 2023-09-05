const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render('search');
  },

  researchedPage: async (req,res) => {
    const searchedElement = req.query.element;
    console.log(req.query);
    const searchedCard = await dataMapper.searchByElement(searchedElement);
    res.render('researchedPage', {searchedCard});
  }

};

module.exports = searchController;