var request = require('request');

var ApiCall = function () { 
  this.url = 'https://api.keen.io/3.0/projects/544962d93831441b2ee1f762/queries/count?api_key=e82a4428505fa4953551040a72189bc5da15ef947434d73811b77f7068f1fb88e27871a7bf1d28166e2c5df847928f26f1045fe8facff37866d06758455f291ae49fc062da22d35b92802b163d99aef974290bd09ccf8d57186edcfc24032af6c4a0826c8022b8154af358d74f6b2899&event_collection=hoist%20connect%20step&filters=%5B%7B%22property_name%22%3A%22stepName%22%2C%22operator%22%3A%22in%22%2C%22property_value%22%3A%5B%22event%3Apublish%3AApplicationEvent%22%2C%22module%3Aexecuted%22%5D%7D%5D&timezone=46800&group_by=stepName';
}

ApiCall.prototype = { 
  getRequest: function (callback) {
    request({json: true, uri: this.url}, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var results = {
          numEventsTriggered: body['result'][0]['result'],
          numModulesExecuted: body['result'][1]['result']
        }
        callback(results);
      }
    })
    
  }
}

module.exports = ApiCall  