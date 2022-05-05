const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const newsRouter = require("./routes/news");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// app.use("/images", express.static("./images"));
//routes
app.use("/news", newsRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server started on port 3002");
  });
});
