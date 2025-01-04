// Dichiarazione variabili
let macNum;

// Inserimento dei dati dall'utente
let evenOrOdd = prompt("Pari o dispari?")
evenOrOdd = evenOrOdd.toLowerCase();
console.log(evenOrOdd);

// Controllo degli input inseriti dall'utente
// TODO: implementare con una funzione?
if(evenOrOdd === "dispari" || evenOrOdd === "pari"){
    // chiamo la funzione per proseguire il gioco
} else {
    alert("inserisci un valore valido");
}

// Inserimento dei dati dall'utente
let userNum = prompt("inserisci un numero tra 1 e 5");
console.log(userNum);

// Controllo degli input inseriti dall'utente
if(userNum > 0 && userNum <= 5){
    // chiamo la funzione per proseguire
} else {
    alert("Inserisci un numero valido, tra 1 e 5");
}


// Generazione numero random dalla macchina con una funzione
function machineNum(min, max){
        macNum = Math.round(Math.random() * (max - min) + min);
        return macNum;
}
console.log(machineNum(1, 5));


// Somma dei due numeri
const sum = macNum + userNum;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
function isEvenOrOdd(){
    
}