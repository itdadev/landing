const express = require("express");
const app = express();
const path = require('path');
// const res = require("express/lib/response");

const PORT = process.env.PORT || 5000;

const multer = require('multer');

// const bodyParser = require("body-parser");
// const fs = require('fs');
<<<<<<< HEAD
// const router = express.Router();
// app.use(bodyParser.urlencoded({ extended: true }));

// multer : image upload

=======

const multer = require('multer');
>>>>>>> 179e066433e049cf9b099466b8cb004d74049688
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/attachments')
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
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

<<<<<<< HEAD
app.post("/recruit-form.html", upload.single('image') ,(req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

module.exports = router;


// const nodemailer = require('nodemailer');

// app.use(express.json());

// app.post('/', (req, res) => {

//   const output = `
//   <p>새로운 지원 메일이 도착했습니다.</p>
//   <h3>지원자 정보</h3>
//   <ul style="list-style: none;">
//     <li style="list-style: none;">Name: ${req.body.name}</li>
//     <li style="list-style: none;">phone: ${req.body.phone}</li>
//     <li style="list-style: none;">email: ${req.body.email}</li>
//     <li style="list-style: none;">apply: ${req.body.apply}</li>
//     <li style="list-style: none;">file: ${req.body.files}</li>
//   </ul>
//   <h3>상세 내용</h3>
//   <p>${req.body.content}</p>
//   `

//   console.log(req.body);

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'yhklilly0305@gmail.com',
//       pass: 'dbghkrud0305'
//     }
//   })

//   const mailOptions = {
//     from: req.body.email,
//     to: 'yhklilly0305@gmail.com',
//     subject: '지원 메일 from ' + req.body.name,
//     html: output
//   }

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error)
//       res.send('error')
//     } else {
//       console.log('Email sent: ' + info.response)
//       res.send('success')
//     }

//   })
// })



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)

})
=======
app.post("/recruit-form.html", upload.array("image",10), (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
>>>>>>> 179e066433e049cf9b099466b8cb004d74049688
