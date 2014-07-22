var MailChimpAPI = require('./../../node_modules/mailchimp-api/mailchimp');
var apiKey = process.env.MAILCHIMPAPIKEY || require('./../secret.json').mailchimp
var Scholarship = require('./../db/models/scholarship.js');
var moment = require('moment');

var mc = new MailChimpAPI.Mailchimp(apiKey);


//ID OF LIST TO USE 0cd7be3684

var emailUpdate = function() {
    createCampaign();
};

var createCampaign = function () {
  var listID = '0cd7be3684';
  var subject = 'bolsas tecnico - Weekly Update';
  var from = 'hello@bolsastecni.co';
  var name = 'bolsastecni.co';
  var templateID = '77541';


  allScholarshipsHtml(function(section) {
      console.log(section);

      mc.campaigns.create({
          type: 'regular',
          options: {
              list_id: listID,
              subject: subject,
              from_email: from,
              from_name: name,
              template_id: templateID
          },
          content: {
              sections: {
                  "scholarship": section
              }
          }
      });
  });
};

var generateScholashipHtml = function(scholarship){
  var fields = [];
  moment().lang('pt');
  var openingdate = moment(scholarship.releaseDate).format('L');
  var closingdate = moment(scholarship.closeDate).format('L');
  fields.push('<h3>' + scholarship.field +  '</h3>');
  fields.push('<span><span style="font-weight: bold">Vagas: </span>' + scholarship.slots + '</span><br>');
  fields.push('<span><span style="font-weight: bold">Responsável: </span>' + scholarship.holder + '</span><br>');
  fields.push('<span style="font-weight: bold">Edital: </span><a href="' + scholarship.link + '">BL181</a><br>');
  fields.push('<span><span style="font-weight: bold">Tipo: </span>' + scholarship.type + '</span><br>');
  fields.push('<span><span style="font-weight: bold">Abertura: </span>' + openingdate + '</span><br>');
  fields.push('<span><span style="font-weight: bold">Prazo Limite: </span>' + closingdate + '</span><br><br><br>');

  var html = fields.join('\n');

  return html;
};

var allScholarshipsHtml = function(callback){
    var html = '';

    Scholarship.findActive(function(err, scholarships) {
        if(err)
            console.log("Error acessing database!");

        scholarships.forEach(function(entry) {
            html += generateScholashipHtml(entry);
        });

        callback(html);
    });

};


module.exports = emailUpdate;
