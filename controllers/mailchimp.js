var MailChimpAPI = require('mailchimp').MailChimpAPI
  , apiKey = require('./../apikeys.js').mailchimp


try { 
  var api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) { console.log(error.message); }

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
