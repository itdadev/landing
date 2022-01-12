const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
// const router = express.Router();
// const bodyParser = require("body-parser");
// const fs = require('fs');
// hello
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
<<<<<<< HEAD
const upload = multer({storage:storage});
=======

const upload = multer({storage:storage});

>>>>>>> c79597aef2af6eb329c75a8e3636b87846bd0e2a
app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
<<<<<<< HEAD
app.get("/recruit-form.html", (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});
app.post("/recruit-form.html", upload.array("image",10), (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});
=======

app.get("/recruit-form.html", (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

app.post("/recruit-form.html", upload.array("image",10), (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

>>>>>>> c79597aef2af6eb329c75a8e3636b87846bd0e2a
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
