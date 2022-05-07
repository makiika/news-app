const express = require("express");
const router = express.Router();
// const { upload } = require("../middlewares/image");
const {
  addNews,
  getNews,
} = require("../controllers/newsController");

/**
 * @swagger
 * /addNews:
 *   post:
 *     description: add news 
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post("/addNews", addNews);


/**
 * @swagger
 * /getNews:
 *   post:
 *     description: get all news 
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get("/getNews", getNews);

module.exports = router;
