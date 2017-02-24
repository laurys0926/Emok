"use strict";

var soap = require('soap');
var http = require('http');
var xml = require('fs').readFileSync('login.wsdl', 'utf8');

var service = {
    loginService : {
        loginPort : {
            send: function (args) {
                return {
                    formatedText: args.uname + " " + args.pasword + " "
                }
            }
        }
    }
};


var server = http.createServer(function(request,response) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8000);
soap.listen(server, '/Emok', service, xml);
