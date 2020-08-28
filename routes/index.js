var express = require('express');
var router = express.Router();
let sessionCount = 0;

/* GET home page. */
router.get('/test', reqFunction);
function reqFunction(req, res, next) {
  console.log(req);
  sessionCount++;
  console.log('sessionCount : ' + sessionCount);

  callBack(result => {
    console.log(result);
    sessionCount--;

    res.json({ mag: 'Data complete : ' + sessionCount });
  });
  req.on('close', function () {
    console.log('close');
  });
}

function callBack(cb) {
  setTimeout(() => {
    cb('Data complete');
  }, 10000);
}

module.exports = router;
