const express = require("express");
const res = require("express/lib/response");
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());

app.get("/recruit-form", (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});

app.post('/', (req, res) => {

  const output = `
  <p>새로운 지원 메일이 도착했습니다.</p>
  <h3>지원자 정보</h3>
  <ul style="list-style: none;">
    <li style="list-style: none;">Name: ${req.body.name}</li>
    <li style="list-style: none;">phone: ${req.body.phone}</li>
    <li style="list-style: none;">email: ${req.body.email}</li>
    <li style="list-style: none;">apply: ${req.body.apply}</li>
    <li style="list-style: none;">file: ${req.body.files}</li>
  </ul>
  <h3>상세 내용</h3>
  <p>${req.body.content}</p>
  `

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yhklilly0305@gmail.com',
      pass: 'dbghkrud0305'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'yhklilly0305@gmail.com',
    subject: '지원 메일 from ' + req.body.name,
    html: output
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response)
      res.send('success')
    }

  })
})



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)

})