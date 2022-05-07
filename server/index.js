const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const newsRouter = require("./routes/news");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "News app API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/news.js"],
};
// app.use("/images", express.static("./images"));
//routes

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/news", newsRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server started on port 3002");
  });
});
