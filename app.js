const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(cors());


app.get("/", (req, res) => {
  // res.header('Access-Control-Allow-Headers', 'application/json');
  res.sendFile(__dirname + "/public/index.html");
});

var corsOptions = {
  origin: 'https://www.itdadev.com/public/recruit-form.html',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('https://www.itdadev.com/public/recruit-form.html', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://www.itdadev.com",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`CORS-enabled web server listening on port ${PORT}`)
});


var name;
var phone;
var email;
var content;
var path;

const storage = multer.diskStorage({
  // execute this middleware to upload the image
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
  limits: {
    fileSize: 100 * 1024 * 1024
  }
}).single('image');


app.post("https://www.itdadev.com/public/recruit-form.html", (req, res) => {

  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      return res.end("Something went wrong!")
    } else {
      name = req.body.name
      phone = req.body.phone
      email = req.body.email
      apply = req.body.apply
      content = req.body.content

      path = req.file.path

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dev@itdadev.com',
          pass: 'dbsdid1123!'
        }
      })
      const output = `
        <p>새로운 지원 메일이 도착했습니다.</p>
        <h3 style="font-size: 20px">지원자 정보</h3>
        <ul style="list-style: none; font-size: 16px;">
          <li style="list-style: none;">Name: ${name}</li>
          <li style="list-style: none;">phone: ${phone}</li>
          <li style="list-style: none;">email: ${email}</li>
          <li style="list-style: none;">apply: ${apply}</li>
        </ul>
        <h3 style="font-size: 20px">상세 내용</h3>
        <p style="font-size: 16px;">${content}</p>
        `

      var mailOptions = {
        from: email,
        to: 'dev@itdadev.com',
        subject: '지원 메일 from ' + name,
        html: output,
        attachments: [{
          path: path
        }]
      }

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err)
        } else {

          fs.unlink(path, function (err) {
            if (err) {
              return res.end(err)
            } else {
              res.send("<script>alert('지원해주셔서 감사합니다!');</script>");
            }
          })
        }
      })
    }
  })

});


app.post("https://www.itdadev.com/public/contact.html", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      return res.end("Something went wrong!")
    } else {
      name = req.body.name
      phone = req.body.phone
      email = req.body.email
      category = req.body.category
      content = req.body.content

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dev@itdadev.com',
          pass: 'dbsdid1123!'
        }
      })
      const output = `
        <p style="font-size: 16px">새로운 문의 메일이 도착했습니다.</p>
        <h3 style="font-size: 20px">문의자 정보</h3>
        <ul style="list-style: none; font-size: 16px;">
          <li style="list-style: none;">이름: ${name}</li>
          <li style="list-style: none;">전화번호: ${phone}</li>
          <li style="list-style: none;">이메일: ${email}</li>
          <li style="list-style: none;">카테고리: ${category}</li>
        </ul>
        <h3 style="font-size: 20px">문의 내용</h3>
        <p style="font-size: 16px">${content}</p>
        `

      var mailOptions = {
        from: email,
        to: 'dev@itdadev.com',
        subject: '문의 메일 from ' + name,
        html: output,
      }

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err)
        } else {
          res.send("<script>alert('문의해주셔서 감사합니다! 곧 연락드리겠습니다.');</script>");
        }
      })
    }
  })
});