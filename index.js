const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());

//PORT
const PORT = 8080;

//router
const bannerRoute = require("./routes/banner");
const aboutRoute = require("./routes/about");
const faqRoute = require("./routes/faq");
const footerIconRoute = require("./routes/footerIcons");
const orderCardRoute = require("./routes/orderCard");
const priceCardRoute = require("./routes/priceCard");
const processRoute = require("./routes/process");
const processCardRoute = require("./routes/processCard");

//Connecting mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connect to mongoDB"))
  .catch((err) => console.log(err));

app.use("/faq", faqRoute);
app.use("/about", aboutRoute);
app.use("/banner", bannerRoute);
app.use("/orderCard", orderCardRoute);
app.use("/priceCard", priceCardRoute);
app.use("/process", processRoute);
app.use("/processCard", processCardRoute);
app.use("/footerIcons", footerIconRoute);

app.get("/", (req, res) => {
  res.send(" Bismillah Hello World!!!");
});

app.listen(process.env.PORT || PORT);
