// Dichiarazione variabili
let machineNum;
let userNum;

// Inserimento dei dati dall'utente
let evenOrOdd = prompt("Pari o dispari?")
evenOrOdd = evenOrOdd.toLowerCase();
console.log(`Hai scelto ${evenOrOdd}`);

// Controllo degli input inseriti dall'utente
if(evenOrOdd === "dispari" || evenOrOdd === "pari"){
    // Proseguo con l'inserimento del numero dall'utente
    userNumber();
} else {
    alert("inserisci un valore valido");
}


function userNumber() {
    // Inserimento dei dati dall'utente
    userNum = prompt("inserisci un numero tra 1 e 5");
    userNum = parseInt(userNum);
    console.log(`Numero inserito dall'utente: ${userNum}`);
    console.log(`Numero generato dalla macchina: ${machineNumber(1, 5)}`);

    // Controllo degli input inseriti dall'utente
    if(userNum > 0 && userNum <= 5){
        // chiamo la funzione per proseguire il gioco
        isEvenOrOdd();
    } else {
        alert("Inserisci un numero valido, tra 1 e 5");
    }
}


// Generazione numero random dalla macchina con una funzione
function machineNumber(min, max){
        machineNum = Math.round(Math.random() * (max - min) + min);
        return machineNum;
}


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto
function isEvenOrOdd(){
    // Somma dei due numeri
    const sum = machineNum + userNum;
    console.log(`La somma dei numeri: ${sum}`);

    const mod = 0;
    // Controllo se il numero è pari o dispari
    if(evenOrOdd === "pari" && mod === sum % 2){
        alert("Hai vinto!");
    } else if (evenOrOdd === "dispari" && mod !== sum % 2){
        alert("Hai vinto!")
    } else if (evenOrOdd === "pari" && mod !== sum % 2){
        alert("Hai perso!");
    } else if (evenOrOdd === "dispari" && mod === sum % 2){
        alert("Hai perso!");
    }
}