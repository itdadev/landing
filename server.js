const express = require("express");
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/recruit-form", (req, res) => {
  res.sendFile(__dirname + "/public/recruit-form.html");
});



module.exports = router;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)

})