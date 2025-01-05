//* Palindroma
// inizializzo le variabili
let word = "";
let reverseWord = "";
let isGameCompleted;

// faccio inserire la parola all'utente
word = prompt("Inserisci una parola");
word = word.toLowerCase();
console.log(word);
palindromeGame();

// controllo se l'utente ha inserito più di una parola, o se non l'ha inserita
function palindromeGame() {
    if (word.includes(" ")) {
        alert("Inserisci una sola parola");
    } else if (word === "") {
        alert("Inserisci una parola valida");
    } else {
        // chiamo la funzione
        palindromeCheck();
        return isGameCompleted = true;
    }
}

function palindromeCheck() {
    // trasformo la stringa inserita dall'utente in un array
    const convertedWord = word.split("");
    // console.log(convertedWord);

    // inverto l'ordine degli elementi all'interno dell'array e lo ritrasformo in stringa
    reverseWord = convertedWord.reverse().join("").toLowerCase();
    console.log(reverseWord);

    // controllo se la parla inserita è palindroma
    if (word === reverseWord) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma")
    }
}

// Controllo che il primo gioco sia stato completato. In quel caso, prosegui con prossimo.
// Altrimenti, interrompi tutto
if (isGameCompleted === true) {
    evenOrOddGame();
}

//* Pari e dispari
function evenOrOddGame() {
    // Dichiarazione variabili
    let machineNum;
    let userNum;

    // Inserimento dei dati dall'utente
    let evenOrOdd = prompt("Pari o dispari?")
    evenOrOdd = evenOrOdd.toLowerCase();
    console.log(`Hai scelto ${evenOrOdd}`);

    // Controllo degli input inseriti dall'utente
    if (evenOrOdd === "dispari" || evenOrOdd === "pari") {
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
        if (userNum > 0 && userNum <= 5) {
            // chiamo la funzione per proseguire il gioco
            isEvenOrOdd();
        } else {
            alert("Inserisci un numero valido, tra 1 e 5");
        }
    }

    // Generazione numero random dalla macchina con una funzione
    function machineNumber(min, max) {
        machineNum = Math.round(Math.random() * (max - min) + min);
        return machineNum;
    }

    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    // Dichiariamo chi ha vinto
    function isEvenOrOdd() {
        // Somma dei due numeri
        const sum = machineNum + userNum;
        console.log(`La somma dei numeri: ${sum}`);

        const mod = 0;
        // Controllo se il numero è pari o dispari
        if (evenOrOdd === "pari" && mod === sum % 2) {
            alert("Hai vinto!");
        } else if (evenOrOdd === "dispari" && mod !== sum % 2) {
            alert("Hai vinto!")
        } else if (evenOrOdd === "pari" && mod !== sum % 2) {
            alert("Hai perso!");
        } else if (evenOrOdd === "dispari" && mod === sum % 2) {
            alert("Hai perso!");
        }
    }

}