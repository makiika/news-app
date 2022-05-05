const { News } = require("../models");

const addNews = async (req, res) => {
  // const news = {
  //   content: req.body.content,
  //   category: req.body.category,
  //   editor: req.body.editor, 
  //   image: req.file.path
  // }

  const news = req.body
  try {
    await News.create(news).then((news) => {
      res.status(200).json(news);
    });
  } catch (error) {
    console.log(error);
  }
};

const getNews = async (req, res) => {
  try {
    await News.findAll().then((news) => {
      res.status(200).json(news);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addNews,
  getNews,
};
