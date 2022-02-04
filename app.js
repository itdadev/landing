const bodyParser = require('body-parser');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static('public'));

app.get("/", (req, res) => {
  // res.header('Access-Control-Allow-Headers', 'application/json');
  res.sendFile(__dirname + "./index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
