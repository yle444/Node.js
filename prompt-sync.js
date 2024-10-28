let prompt = require("prompt-sync")() // Importa il modulo 'prompt-sync' e lo inizializza per l'input dell'utente

let nome = prompt("Inserisci il tuo nome: ")// Chiede all'utente di inserire il proprio nome e lo memorizza nella variabile 'nome'

console.log("Benvenuto al corso nodejs " + nome) //stampo il messaggio concatenando il nome fornito dall'utente