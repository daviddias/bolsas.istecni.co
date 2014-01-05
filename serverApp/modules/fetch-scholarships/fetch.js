var http = require('http');
var htmlparser = require('htmlparser');
var select = require('soupselect').select;

function parseScholarships(html, cb) {
  var scholarshipList = [];
  var handler = new htmlparser.DefaultHandler(function (err, html) {
    if (err) { cb(err,null)
    } else {
      var allRows = select(html, 'tr');
      allRows.forEach(function (row) {
        var scholarship = [];
        var columns = select(row, 'td');

        columns.forEach(function (column) {
          if(scholarship.length === 3){
            scholarship.push(column.children[0].raw.split('\"')[1]);
            scholarship.push(column.children[0].raw.split('\"')[1].split('/')[6].split('.')[0]);
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
            scholarshipId: scholarship[4],
            field: scholarship[5],
            releaseDate: new Date(scholarship[6].split('.')[2],scholarship[6].split('.')[1],scholarship[6].split('.')[0]),
            closeDate: new Date(scholarship[7].split('.')[2],scholarship[7].split('.')[1],scholarship[7].split('.')[0]),
            active : true
          });
        }
      });
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(html);

  cb(null, scholarshipList);
}

// var date = new Date(79,5,24) YY,MM,DD

var fetch = {
  run: function (cb) {
    var options = {
      hostname: 'drh.ist.utl.pt',
      port: 80,
      path: '/bolseiros/recrutamento/',
      method: 'GET'
    };

    var req = http.request(options, function (res) {
      res.setEncoding('utf8');

      var html = '';
      res.on('data', function (chunk) {
        html = html + chunk;
      });

      res.on('end', function () {
        parseScholarships(html, cb);
      });
    });

    req.on('error', function (err) {
      cb(err, null)
    });

    req.end();
  }
};

module.exports = fetch;

// Just to test it out
// fetch.run(function(err, scholarshipList){
//   if(err) {
//     return console.log(err);
//   }
//   console.log(scholarshipList);
// });