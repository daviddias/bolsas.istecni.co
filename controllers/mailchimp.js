var MailChimpAPI = require('mailchimp').MailChimpAPI
  , apiKey = require('./../env.js').mailchimp;

//ID OF LIST TO USE 0cd7be3684
try {
  var api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
  console.log(error.message);
}


var createCampaign = function () {
  var listID = '0cd7be3684';
  var subject = 'Weekly Update';
  var from = 'hello@bolsastecni.co';
  var name = 'bolsastecni.co';
  var templateID = 'Still to understand this one';

  api.campaignCreate('regular'
                    , [listID, subject, from, name] //Options
                    , ['sdadass'] //Content
                    , function (err, result) {
                      if (err) {console.log(err);}
                      console.log(result);
                    });
};

var emailUpdate = function(){
  console.log('TODO');
};

module.exports = emailUpdate;
