// Dichiarazione variabili
const confirmButton = document.querySelector(".confirm");
let selectedValue;
let userNum = document.querySelector(".userNumber");
let machineNum;
let machineNumberResult = document.querySelector(".machineNumberResult");
let sumResult = document.querySelector(".sumResult");
let finalResult = document.querySelector(".finalResult");
let finalResultLose = document.querySelector(".finalResultLose");

// Al click del bottone
confirmButton.addEventListener("click", function () {
    // Ottengo il valore dell'opzione selezionata
    let selectElement = document.querySelector(".selectOpt");
    selectedValue = selectElement.value;
    // console.log("Valore selezionato:", selectedValue);

    // Chiamo la funzione che elabora l'inserimento del numero dall'utente
    userNumber();
});


function userNumber() {
    userNum = userNum.value;
    userNum = parseInt(userNum);

    // Controllo degli input inseriti dall'utente
    if (userNum > 0 && userNum <= 5) {
        // Chiamo la funzione per generare il numero dalla macchina
        machineNumberResult.innerHTML = `Numero generato dalla macchina: ${machineNumber(1, 5)}`;
        // Chiamo la funzione per proseguire il gioco
        isEvenOrOdd();
    } else {
        finalResult.classList.add("d-none");
        finalResultLose.classList.remove("d-none");
        machineNumberResult.classList.add("d-none");
        sumResult.classList.add("d-none");
        finalResultLose.innerHTML = "Inserisci un numero valido: tra 1 e 5";
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
    sumResult.innerHTML = `La somma dei numeri è: ${sum}`;

    // Controllo se il numero è pari o dispari
    const mod = 0;

    if (selectedValue === "pari" && mod === sum % 2) {
        displayResultWin()
    } else if (selectedValue === "dispari" && mod !== sum % 2) {
        displayResultWin()
    } else if (selectedValue === "pari" && mod !== sum % 2) {
        displayResultLose()
    } else if (selectedValue === "dispari" && mod === sum % 2) {
        displayResultLose()
    }
}

// Funzione che cambia le classi degli elementi se si perde
function displayResultLose() {
    finalResult.classList.add("d-none");
    finalResultLose.classList.remove("d-none");
    finalResultLose.innerHTML = "Hai perso!";
}

// Funzione che cambia le classi degli elementi se si vince
function displayResultWin() {
    finalResult.innerHTML = "Hai vinto!";
}