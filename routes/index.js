const express = require("express");
const messages = require('../public/javascripts/messages')

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = router;
