const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
// const router = express.Router();
// const bodyParser = require("body-parser");
// const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "public/attachments")
  },
  filename:(req, file, cb)=>{
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({storage:storage});

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/recruit-form.html", (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

app.post("/recruit-form.html", upload.array("image",10), (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
