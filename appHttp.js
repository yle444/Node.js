const fs = require("fs"); // Importa il modulo 'fs' (File System) per leggere i file

const http = require("http"); // Importa il modulo 'http' per creare il server HTTP

// Creazione del server HTTP
http.createServer(function (req, res) {
    // Controllo l'URL della richiesta
    if (req.url == "/" && req.method.toLowerCase() == "get") {
        // Se l'URL è la root ("/"), legge il file 'index.html'
      let home = fs.readFileSync("index.html").toString(); // Legge il contenuto di 'index.html' e lo converte in stringa
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(home); // Invio il contenuto della pagina 'index.html' come risposta e termina la richiesta

    } else if (req.url == "/contatti" && req.method.toLowerCase() == "get") {
        // Se l'URL è "/contatti", legge il file 'contacts.html'
      let contacts = fs.readFileSync("contacts.html").toString(); // Carico il file contacts.html
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(contacts); // Invio il contenuto della pagina

    } else if (req.url == "/blog" && req.method.toLowerCase() == "get") {
      let blog = fs.readFileSync("blog.html").toString(); // Carico il file blog.html
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(blog); // Invio il contenuto della pagina

    } else {
      // Se la pagina non esiste, restituisco un errore 404
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Pagina non trovata</h1>");
    }
  })
  .listen(8080); // Il server ascolta le richieste sulla porta 8080
  
