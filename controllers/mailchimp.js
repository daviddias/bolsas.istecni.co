var MailChimpAPI = require('mailchimp').MailChimpAPI
  , apiKey = require('./apikeys.js').mailchimp


try { 
  var api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) { console.log(error.message); }


var createNewsletter = function() {

    var apioptions = {
        type: 'regular',
        options: {
            list_id: '0cd7be3684',
            subject: 'bolsastecni.co - Novas bolsas',
            from_email: 'hello@bolsastecni.co',
            from_name: 'bolsastecni.co',
            to_name: 'subscribers'
        },
        content: {
            html: '<h1>bolsastecni.co teste</h1>',
            text: 'bolsastecni.co teste'
        }
    };

    api.campaignCreate(apioptions, function(error, data) {
        if(error)
            console.log("Error contacting MailChimp Api!");
        else {
            console.log(JSON.stringify(data));
            api.campaignSendNow({cid: data}, function(error, data) {
                if(error)
                    console.log("Error sending campaign!");
                else
                    console.log(JSON.stringify(data));
            });
        }
    });
}

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
    createNewsletter();
};

module.exports = emailUpdate;
