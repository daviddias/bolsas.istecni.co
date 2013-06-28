
var http = require('http'),
    sys = require('sys'),
    htmlparser = require("htmlparser"),
    select = require('soupselect').select;

var options = {
  hostname: 'drh.ist.utl.pt',
  port: 80,
  path: '/bolseiros/recrutamento-bolseiros/',
  method: 'GET'
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        var handler = new htmlparser.DefaultHandler(function(err, dom) {
            if (err) {
                sys.debug("Error: " + err);
            } else {
                //Fetch thead for keyValues

                var tbody = select(dom, 'tbody');
                var allRows = select(dom, 'tr');
                allRows.forEach(function(row){
                    var scholarship = new Array();
                    var columns = select(row, 'td');

                    columns.forEach(function(column){
                       scholarship.push(column.children[0].raw);
                       //sys.puts(column.children[0].raw);
                    })  
    
                    scholarship[3] = String(scholarship[3]).split("\"")[1];
                    sys.puts(scholarship);
                    sys.puts("\n\n");
    
                })
           }
        });
        var parser = new htmlparser.Parser(handler);
        parser.parseComplete(chunk);
    });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();