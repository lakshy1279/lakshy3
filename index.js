const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const path = require("path");
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./assets"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server: ${err}`);
  }
  console.log(`server is running on the port:${port}`);
});
