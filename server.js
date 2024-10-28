var http = require('http'); //importo modulo http

http.createServer(function (req, res) { //creo un server
    res.writeHead(200, {'Content-Type': 'text/html'});  // Aggiungo intestazione HTTP
    res.write('<h1>Hello, World!</h1>');  // Contenuto HTML
    res.end();  // Termina la risposta
  }).listen(8080); //Ascolta porta 8080
  
  