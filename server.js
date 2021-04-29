const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));

//db connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useInifiedTopplogy: true,
  useCreateIndex: true,
});

//routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});