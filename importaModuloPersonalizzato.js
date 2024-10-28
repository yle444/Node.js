//Questo codice crea un server HTTP che risponde con la data e l'ora correnti, utilizzando un modulo personalizzato per ottenere tali informazioni. Il server ascolta sulla porta 8080.

var http = require('http');/// Importa il modulo http per creare un server
var dt = require('./myfirstmodule'); // Importa un modulo personalizzato per gestire la data e l'ora

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});  // Imposta la risposta con codice 200 e tipo di contenuto HTML
  res.write("The date and time is currently: " + dt.myDateTime());// Scrive la data e ora attuale usando una funzione dal modulo personalizzato
  res.end(); // Termina la risposta
}).listen(8080);//il server ascolta richiesta sul porta 8080
              

