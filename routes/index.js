var express = require('express');
var router = express.Router();
var ApiCall = require('../public/javascripts/apiCall');
var apiCall = new ApiCall();

/* GET home page. */
router.get('/', function(req, res) {
  apiCall.getRequest(function (results) {
    var ipAddress = req.headers['X-REAL-IP'] || req.ip;
    if (ipAddress === '116.90.139.105') {
      res.render('index', { title: 'Dashboard', numEventsTriggered: results['numEventsTriggered'], numModulesExecuted: results['numModulesExecuted']});
    } else {
      res.render('401')
    }
  })
});


module.exports = router; 
  