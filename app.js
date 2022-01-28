const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');

const fs = require('fs');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

var name;
var phone;
var email;
var content;
var path;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./attachments")
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
});

const upload = multer({
  storage: storage, 
  limits: { fileSize: 100 * 1024 * 1024 }
}).single('image');


app.post("/requst-form.html", (req, res) => {
  // execute this middleware to upload the image
  upload(req, res, function(err){
    if(err){
      console.log(err)
      return res.end("Something went wrong!")
    }else{
      name = req.body.name
      phone = req.body.phone
      email = req.body.email
      content = req.body.content

      path = req.file.path

      // console.log(name)
      // console.log(phone)
      // console.log(email)
      // console.log(content)
      // console.log(path)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yhklilly0305@gmail.com',
          pass: 'dbghkrud0305'
        }
      })
      const output = `
        <p>새로운 지원 메일이 도착했습니다.</p>
        <h3>지원자 정보</h3>
        <ul style="list-style: none;">
          <li style="list-style: none;">Name: ${req.body.name}</li>
          <li style="list-style: none;">phone: ${req.body.phone}</li>
          <li style="list-style: none;">email: ${req.body.email}</li>
          <li style="list-style: none;">apply: ${req.body.apply}</li>
        </ul>
        <h3>상세 내용</h3>
        <p>${req.body.content}</p>
        `
      
      var mailOptions = {
        from: req.body.email,
        to: 'yhklilly0305@gmail.com',
        subject: '지원 메일 from ' + req.body.name,
        html: output,
        attachments: [
          {
            path: path
          }
        ]
      }

      transporter.sendMail(mailOptions, function(err,info){
        if(err){
          console.log(err)
        }else{

          fs.unlink(path, function(err){
            if(err){
              return res.end(err)
            }else{
              res.send("<script>alert('지원해주셔서 감사합니다!');location.href='public//recruit.html';</script>");
            }
          })
        }
      })
    }
  })

});


app.post("/contact.html", (req, res) => {
  upload(req, res, function(err){
    if(err){
      console.log(err)
      return res.end("Something went wrong!")
    }else{
      name = req.body.name
      phone = req.body.phone
      email = req.body.email
      category = req.body.category
      content = req.body.content

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yhklilly0305@gmail.com',
          pass: 'dbghkrud0305'
        }
      })
      const output = `
        <p>새로운 문의 메일이 도착했습니다.</p>
        <h3>문의자 정보</h3>
        <ul style="list-style: none;">
          <li style="list-style: none;">이름: ${req.body.name}</li>
          <li style="list-style: none;">전화번호: ${req.body.phone}</li>
          <li style="list-style: none;">이메일: ${req.body.email}</li>
          <li style="list-style: none;">카테고리: ${req.body.category}</li>
        </ul>
        <h3>문의 내용</h3>
        <p>${req.body.content}</p>
        `
      
      var mailOptions = {
        from: req.body.email,
        to: 'yhklilly0305@gmail.com',
        subject: '문의 메일 from ' + req.body.name,
        html: output,
      }

      transporter.sendMail(mailOptions, function(err,info){
        if(err){
          console.log(err)
        }else{
          res.send("<script>alert('문의해주셔서 감사합니다! 곧 연락드리겠습니다.');location.href='public/contact.html';</script>");
        }
      })
    }
  })
});