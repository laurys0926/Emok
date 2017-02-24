'use strict'
var soap = require('soap');
var url = 'http://localhost:8000/?wsdl';

soap.createClient(url, function(error, client) {
    if (error) {
        throw error;
    }

    var data = {
        uname:      "medis",
        pasword:  "medinis",
       
    }

    client.describe().loginService.loginPort;
    client.send(data,function(err,res){
            if (err) throw err;

            // Response from web service
            console.log (res);
    });
});
