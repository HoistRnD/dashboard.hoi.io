var express = require('express');
var router = express.Router();
var ApiCall = require('../public/javascripts/apiCall');
var apiCall = new ApiCall();

/* GET home page. */
router.get('/', function(req, res) {
  apiCall.getRequest(function (results) {
    if (results !== 'unauthorized') {
      res.render('index', { title: 'Dashboard', numEventsTriggered: results['numEventsTriggered'], numModulesExecuted: results['numModulesExecuted']});
    } else {
      res.render('error', {error: {status: 401}})
    }
  })
});


module.exports = router; 
  