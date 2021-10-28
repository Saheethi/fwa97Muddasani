var express = require('express');
var router = express.Router();
var n = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  n=n+1;
  res.send(`User accesses are: ${n}`);
});

module.exports = router;
