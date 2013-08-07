var http = require('http');
var htmlparser = require("htmlparser");
var select = require('soupselect').select;
var inspect = require('util').inspect;
var accessDB = require('./../store/accessDB');

function parseScholarships(html) {
  var scholarshipList = [];
  var handler = new htmlparser.DefaultHandler(function (err, html) {
    if (err) { console.log("Error: " + err);
    } else {
      var tbody = select(html, 'tbody');
      var allRows = select(html, 'tr');
      allRows.forEach(function (row) {
        var scholarship = [];
        var columns = select(row, 'td');

        columns.forEach(function (column) {
          if(scholarship.length === 3){
            scholarship.push(column.children[0].raw.split("\"")[1]);
            scholarship.push(column.children[0].raw.split("\"")[1].split("/")[6].split(".")[0]);
          }else {
            scholarship.push(column.children[0].raw);
          }
        });
        if(scholarship[0]){ //to avoid the first empty line
          scholarshipList.push({
            slots: scholarship[0],
            type: scholarship[1],
            holder: scholarship[2],
            link: scholarship[3],
            scholarid: scholarship[4],
            field: scholarship[5],
            releaseDate: scholarship[6],
            closeDate: scholarship[7]
          });
        }
      });
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(html);

  //insert here into DB
  //console.log("Inserting in DB");
  scholarshipList.forEach(function (scholarship) {
    accessDB.saveScholarship(scholarship);
  });
  //console.log("Finish Inserting in DB");
  //console.log(inspect(scholarshipList));

}

var fetch = {
    run: function () {
        var options = {
            hostname: 'drh.ist.utl.pt',
            port: 80,
            path: '/bolseiros/recrutamento-bolseiros/',
            method: 'GET'
        };

        var req = http.request(options, function (res) {
            res.setEncoding('utf8');

            var html = "";
            res.on('data', function (chunk) {
                //console.log("Got the HTML");
                html = html + chunk;
            });

            res.on('end', function () {
                parseScholarships(html);
            });
        });

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        req.end();
    },

    cleanInactive: accessDB.removeInactiveScholarships
};



module.exports = fetch;
