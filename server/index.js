
var select = require('soupselect').select,
    htmlparser = require("htmlparser"),
    http = require('http'),
    sys = require('sys');

// fetch some HTML...
var http = require('http');
//var host = 'www.drh.ist.utl.pt/bolseiros/recrutamento-bolseiros/';
/*
var options = {
  hostname: 'www.drh.ist.utl.pt',
  port: 80,
  path: '/bolseiros/recrutamento-bolseiros/',
  method: 'GET'
};
*/
var options = {
    hostname: 'www.reddit.com',
    port: 80,
    path: '/',
    method: 'GET'
};


//var client = http.createClient(80, host);
var req = http.request(options, function(request) {
    request.on('response', function (response) {
        sys.puts("Got Response");

        response.setEncoding('utf8');
        
        var body = "";
        response.on('data', function (chunk) {
            sys.puts("Got Body");
            body = body + chunk;
        });

        response.on('end', function() {
            sys.puts("END");

            // now we have the whole body, parse it and select the nodes we want...
            var handler = new htmlparser.DefaultHandler(function(err, dom) {
                if (err) {
                    sys.debug("Error: " + err);
                } else {

                    // soupselect happening here...
                    var table = select(dom, 'table');
                    sys.puts("IST Scholarships");
                    sys.puts(table);

                    /*
                    titles.forEach(function(title) {
                        sys.puts("- " + title.children[0].raw + " [" + title.attribs.href + "]\n");
                    }) */

                }
            });

        var parser = new htmlparser.Parser(handler);
        parser.parseComplete(body);
    });
    });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

//var request = client.request('GET', '/',{'host': host});

req.end();