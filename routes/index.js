var express = require('express');
var router = express.Router();
var ApiCall = require('../public/javascripts/apiCall');
var apiCall = new ApiCall();

/* GET home page. */
router.get('/', function(req, res) {
  apiCall.getRequest(function (results) {
    res.render('index', { title: 'Dashboard', numEventsTriggered: results['numEventsTriggered'], numModulesExecuted: results['numModulesExecuted']});
  })
});


module.exports = router; 
  