var MailChimpAPI = require('mailchimp').MailChimpAPI
  , apiKey = require('./../apikeys.js').mailchimp

//ID OF LIST TO USE 0cd7be3684
try { 
  var api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) { console.log(error.message); }


var createCampaign = function () {
  var listID = '0cd7be3684'
  var subject = 'Weekly Update'
  var from = 'hello@bolsastecni.co'
  var name = 'bolsastecni.co'
  var templateID = 'Still to understand this one'

  api.campaignCreate('regular'
                    , [listID, subject, from, name] //Options
                    , ['sdadass'] //Content
                    , function (err, result) {
                      if (err) {console.log(err)}
                      console.log(result)  
                    })
}

createCampaign()

// api.lists(['list_id','list_name'], function(err, result) {
//   console.log(result)
// })

// function subscribeUser (semail, sflname) {
//   var user_merge_vars = {
//     EMAIL: semail,
//     FLNAME: sflname
//   }
//   api.listSubscribe({id: '60ff1bf8ca'
//                    , email_address: semail
//                    , merge_vars: user_merge_vars
//                    , send_welcome : true }
//                    , function (error, data) {
//     if (error)
//       console.log(error.message)
//     else
//       console.log(JSON.stringify(data))
//     })
// }

var emailUpdate = function(){
  console.log('TODO')
} 

module.exports = emailUpdate
