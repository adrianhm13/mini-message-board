const express = require("express");
const messages = require('../public/javascripts/messages')
const dateFormat = require("../public/javascripts/dateFormat");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messageboard", messages });
});

/* Form for new messages */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", function (req, res, next) {
  const {messageText, authorText} = req.body
  messages.push({user: authorText, text: messageText, added: dateFormat(new Date())})
  
  res.redirect('/')
})

module.exports = router;
