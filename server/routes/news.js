const express = require("express");
const router = express.Router();
// const { upload } = require("../middlewares/image");
const {
  addNews,
  getNews,
} = require("../controllers/newsController");

/**
 * @swagger
 * /news/addNews:
 *   post:
 *     description: add news
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - name: content
 *        description: news content
 *        in: formData
 *        required: true
 *        type: string
 *      - name: category
 *        description: news category
 *        in: formData
 *        required: true
 *        type: string
 *      - name: image
 *        description: new image
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/addNews", addNews);


/**
 * @swagger
 * /news/getNews:
 *   get:
 *     description: get all news 
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get("/getNews", getNews);

module.exports = router;
