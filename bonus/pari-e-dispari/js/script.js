// Dichiarazione variabili
const inputForm = document.querySelector(".inputForm");
let selectedOption = document.querySelector(".selectOpt");
let userNum = document.querySelector(".userNumber");
let machineNum = document.querySelector(".machineNumberResult");
let sumResult = document.querySelector(".sumResult");
let finalResult = document.querySelector(".finalResult");
const wrongInput = document.querySelector(".wrongInput");

// Al click del bottone / invio del form
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Chiamo la funzione che elabora l'inserimento dei dati inseriti
    userInput();
});

// Elaborazione dei dati inseriti
function userInput() {
    // Ottengo il valore dell'opzione selezionata
    selectedOption = selectedOption.value;

    // Ottengo l'input inserito dall'utente e lo converto in un dato di tipo int
    userNum = userNum.value;
    userNum = parseInt(userNum);

    // Controllo validità degli input inseriti dall'utente
    if (userNum > 0 && userNum <= 5) {
        // Chiamo la funzione per generare il numero dalla macchina e lo assegno alla variabile
        machineNum.value = `Numero generato dalla macchina: ${machineNumber(1, 5)}`;
        
        // Chiamo la funzione che esegue la somma dei due numeri
        sumResult.value = `La somma dei numeri è: ${numSum(machineNum, userNum)}`;

        // Chiamo la funzione per decidere se la somma è pari o dispari
        finalResult.value = isEvenOrOdd(selectedOption, sumResult);
    } else {
        sumResult.classList.add("d-none");
        machineNum.classList.add("d-none");
        wrongInput.classList.remove("d-none");
        finalResult.classList.add("d-none");
    }
}


// Generazione numero random dalla macchina con una funzione
function machineNumber(min, max) {
    machineNum = Math.round(Math.random() * (max - min) + min);
    return machineNum;
}

// Somma del numero inserito dall'utente con quello generato dalla macchina
function numSum(num1, num2){
    sumResult = num1 + num2;
    return sumResult;
}

// Stabiliamo se la somma dei due numeri è pari o dispari
function isEvenOrOdd(option, result) {
    const mod = 0;

    if ((option === "pari" && mod === result % 2) || (option === "dispari" && mod !== result % 2)) {
        return finalResult = "Hai vinto!";
    } else if ((option === "pari" && mod !== result % 2) || (option === "dispari" && mod === result % 2)) {
        return finalResult = "Hai perso!";
    }
}