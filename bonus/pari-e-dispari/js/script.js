// Dichiarazione variabili
const inputForm = document.querySelector(".inputForm");
const outputElements = document.querySelector(".outputElements");
let selectedOption = document.querySelector(".selectOpt");
let userNum = document.querySelector(".userNumber");
let machineNum = document.querySelector(".machineNumberResult");
let sumResult = document.querySelector(".sumResult");
let finalRes = document.querySelector(".finalResult");
const wrongInput = document.querySelector(".wrongInput");
let machineNumber = 0;

// Al click del bottone / invio del form
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Chiamo la funzione che elabora l'inserimento dei dati inseriti
    userInput();
});

// Elaborazione dei dati inseriti
function userInput() {
    // Ottengo il valore dell'opzione selezionata
    let selectOpt = selectedOption.value;

    // Ottengo l'input inserito dall'utente e lo converto in un dato di tipo int
    let userNumber = userNum.value;
    userNumber = parseInt(userNumber);

    // Controllo validità degli input inseriti dall'utente
    if (userNumber > 0 && userNumber <= 5) {
        // Chiamo la funzione per generare il numero dalla macchina e lo assegno alla variabile
        machineNum.value = `Numero generato dalla macchina: ${machineNumberCalc(1, 5)}`;
        
        // Chiamo la funzione che esegue la somma dei due numeri
        let sumRes = numSumCalc(machineNumber, userNumber);
        sumResult.value = `La somma dei numeri è: ${sumRes}`;

        // Chiamo la funzione per decidere se la somma è pari o dispari
        isEvenOrOdd(selectOpt, sumRes);

        outputElements.classList.remove("d-none");
        wrongInput.classList.add("d-none");
    } else {
        outputElements.classList.add("d-none");
        wrongInput.classList.remove("d-none");
    }
}

// Generazione numero random dalla macchina con una funzione
function machineNumberCalc(min, max) {
    machineNumber = Math.round(Math.random() * (max - min) + min);
    return machineNumber;
}

// Somma del numero inserito dall'utente con quello generato dalla macchina
function numSumCalc(num1, num2){
    let sumRes = num1 + num2;
    return sumRes;
}

// Stabiliamo se la somma dei due numeri è pari o dispari
function isEvenOrOdd(option, result) {
    const mod = 0;

    if ((option === "pari" && result % 2 === mod) || (option === "dispari" && result % 2 !== mod)) {
        finalRes.value = "Hai vinto!";
        return finalRes;
    } else if ((option === "pari" && result % 2 !== mod) || (option === "dispari" && result % 2 === mod)) {
        finalRes.value = "Hai perso!";
        return finalRes;
    }
}