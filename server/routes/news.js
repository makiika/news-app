const express = require("express");
const router = express.Router();
// const { upload } = require("../middlewares/image");
const {
  addNews,
  getNews,
} = require("../controllers/newsController");

router.post("/addNews", addNews);

router.get("/getNews", getNews);

module.exports = router;
