// Dichiarazione variabili
const inputForm = document.querySelector(".inputForm");

// Input dell'utente
let selectedOption = document.querySelector(".selectOpt");
let userNumber = document.querySelector(".userNumber");

// Gruppo di elementi che mostrano i risultati
const outputElements = document.querySelector(".outputElements");
let machineNumber = document.querySelector(".machineNumberResult");
let sumResult = document.querySelector(".sumResult");
let finalResult = document.querySelector(".finalResult");
const wrongInput = document.querySelector(".wrongInput");

// Al click del bottone / invio del form:
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Chiamo la funzione che elabora l'inserimento dei dati inseriti
    userInput();
});

// Elaborazione dei dati
function userInput() {
    // Ottengo il valore dell'input inserito dall'utente e lo converto in un dato di tipo int
    let userNum = userNumber.value;
    userNum = parseInt(userNum);

    // Controllo validità dell'input inserito dall'utente
    if (userNum > 0 && userNum <= 5) {
        // Continua il gico
        // Chiamo la funzione per generare il numero dalla macchina e lo assegno alla variabile machineNum
        const machineNum = machineNumberCalc(1, 5);
        machineNumber.value = `Numero generato dalla macchina: ${machineNum}`;

        // Chiamo la funzione che esegue la somma dei due numeri e salvo il risultato in una variabile
        const sumRes = numSumCalc(machineNum, userNum);
        sumResult.value = `La somma dei numeri è: ${sumRes}`;

        // Ottengo il valore dell'opzione selezionata dall'utente
        const selectOpt = selectedOption.value;
        // Chiamo la funzione per decidere se la somma è pari o dispari
        isEvenOrOdd(selectOpt, sumRes);

        outputElements.classList.remove("d-none");
        wrongInput.classList.add("d-none");
    } else {
        // Altrimenti mostra il messaggio di errore
        outputElements.classList.add("d-none");
        wrongInput.classList.remove("d-none");
    }
}

// Generazione numero random dalla macchina
function machineNumberCalc(min, max) {
    const macNum = Math.round(Math.random() * (max - min) + min);
    return macNum;
}

// Somma del numero inserito dall'utente con quello generato dalla macchina
function numSumCalc(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Stabiliamo se la somma dei due numeri è pari o dispari
function isEvenOrOdd(option, result) {
    const mod = 0;

    if ((option === "pari" && result % 2 === mod) || (option === "dispari" && result % 2 !== mod)) {
        finalResult.value = "Hai vinto!";
        return finalResult;
    } else if ((option === "pari" && result % 2 !== mod) || (option === "dispari" && result % 2 === mod)) {
        finalResult.value = "Hai perso!";
        return finalResult;
    }
}