var express = require('express');
var router = express.Router();

/* Form for new messages */
router.get('/', function(req, res, next) {
  res.send('Form for new message');
});

module.exports = router;
