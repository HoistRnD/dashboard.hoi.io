var express = require('express');
var router = express.Router();
var ApiCall = require('../public/javascripts/apiCall');
var apiCall = new ApiCall();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('request headers:',req.headers);
  var ipAddress = req.headers['x-real-ip'] || req.ip;
  if (ipAddress === '116.90.139.105') {
    apiCall.getRequest(function (results) {
    
        res.render('index', { title: 'Dashboard', numEventsTriggered: results['numEventsTriggered'], numModulesExecuted: results['numModulesExecuted']});
       
    });
  }
  else {
    res.render('401')
  }
});


module.exports = router; 
  
