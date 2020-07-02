const express = require("express");
// const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json())
// app.use(express.urlencoded());
// require("dotenv").config();

const eCommerceDBRouter = require("./routes/api");
app.use("/", eCommerceDBRouter);

// app.use(express.static(path.join(__dirname, "build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
