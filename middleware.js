const http = require('http'); //importo modulo http 

function middleware1(req, res, next) {
    console.log("Middleware 1"); //stampa in console "Middelware 1"
    next(); // Passa il controllo al prossimo middleware
}

function middleware2(req, res, next) {
    console.log("Middleware 2");  //stampa in console "Middelware 1"
    res.write('Hello from Middleware 2'); //Scrive la risposta
    next(); // Passa il controllo al prossimo middleware (se presente)
}

function handleRequest(req, res) {
    middleware1(req, res, () => {
        middleware2(req, res, () => {
            res.end(); // Termina la risposta qui
        });
    });
}

http.createServer(handleRequest).listen(8080);
