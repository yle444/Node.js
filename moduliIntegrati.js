// Importazione del modulo http
var http = require('http');

http.createServer(function (req, res) { // Creazione di un server HTTP 
  res.writeHead(200, {'Content-Type': 'text/html'}); // invio l'intestazione della risposta. se la richiesta va a buon fine, imposto il tipo di contenuto della risposta in questo caso HTML.
  res.end('Hello World!'); //termina la risposta inviando il  messaggio "Hello World!"
}).listen(8080);  // Il server ascolta sulla porta 8080