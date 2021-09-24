let express = require('express');
let axios = require('axios');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', function(req, res, next) {
  console.log(req.body);
  axios.post('https://phase1dev-hardwareandlumbertest.cs191.force.com/services/apexrest/api/whatsapp', {
    verification_token: req.body.verification_token,
    secret: req.body.secret,
    payload: req.body
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  res.json({ challenge: req.body.challenge })
  res.statusCode = 200;
});
module.exports = router;
