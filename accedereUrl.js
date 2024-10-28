var http = require('http'); //importo modulo http

http.createServer(function (req, res) {//creo un server
    res.writeHead(200, {'Content-Type': 'text/html'});// Aggiungo intestazione HTTP
    res.write('<h1>Requested URL: ' + req.url + '</h1>');  // Mostra l'URL richiesto
    res.end();
  }).listen(8080);//Ascolta porta 8080
  