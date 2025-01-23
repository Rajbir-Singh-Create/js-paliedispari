// Dichiarazione variabili utili
const inputForm = document.querySelector(".inputForm");
const tableBody = document.querySelector(".tbody");
const cleanHistoryBtn = document.querySelector(".cleanHistoryBtn");

// Input dell'utente
let selectedOption = document.querySelector(".selectOpt");
let userNumber = document.querySelector(".userNumber");

// Gruppo di elementi che mostrano i risultati
const outputElements = document.querySelector(".outputElements");
let machineNumber = document.querySelector(".machineNumberResult");
let sumResult = document.querySelector(".sumResult");
let finalResult = document.querySelector(".finalResult");
const wrongInput = document.querySelector(".wrongInput");

let resultsHistory = [];

// Al click del bottone / invio del form:
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Chiamo la funzione che elabora l'inserimento dei dati e del gioco
    userInput();
});

// Elaborazione dei dati
function userInput() {
    // Ottengo il valore dell'input inserito dall'utente e lo converto in un dato di tipo int
    let userNum = userNumber.value;
    userNum = parseInt(userNum);

    // Controllo validità dell'input inserito dall'utente
    if (userNum > 0 && userNum <= 5) {
        // Continua il gioco
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

        // Mostra i risultati
        outputElements.classList.remove("d-none");
        wrongInput.classList.add("d-none");

        // Inseriamo il risultato all'interno di un array inizializzato in precedenza
        resultsHistory.unshift(finalResult.value);
    } else {
        // Altrimenti mostra il messaggio di errore
        outputElements.classList.add("d-none");
        wrongInput.classList.remove("d-none");
    }
    // Chiamo la funzione che popola la tabella dello storico dei risultati
    historyResults();
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
    } else if ((option === "pari" && result % 2 !== mod) || (option === "dispari" && result % 2 === mod)) {
        finalResult.value = "Hai perso!";
    }
}

// Funzione che popola la tabella con i risultati
//* Si poteva usare anche il insertBefore() senza utilizzare un array
function historyResults() {
    tableBody.innerHTML = "";
    
    resultsHistory.forEach(function(element){
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.innerHTML = element;

        // Diamo lo stile ai vecchi risultati
        if (element === "Hai vinto!"){
            row.classList.add("table-success");
        } else if (element === "Hai perso!"){
            row.classList.add("table-danger");
        }

        row.appendChild(cell);   
        tableBody.appendChild(row);
    });
    console.log(resultsHistory);
}

// Funzione per pulire lo storico delle partite
cleanHistoryBtn.addEventListener("click", function () {
    if (confirm("Sei sicuro di voler cancellare lo storico?") == true) {
        // Elementi dello stato del bottone
        const spinnerElement = cleanHistoryBtn.querySelector('#spinner');
        const statusText = cleanHistoryBtn.querySelector('.status');
        const originalStatusText = statusText.innerHTML;

        // Cambio dello stato del bottone
        cleanHistoryBtn.disabled = true;
        spinnerElement.classList.toggle('d-none');
        statusText.innerHTML = `Pulisco lo storico...`;

        setTimeout(() => {
            // Pulisco la tabella e l'array
            tableBody.innerHTML = ``;
            resultsHistory = [];

            // Reset dello stato del bottone
            cleanHistoryBtn.disabled = false;
            spinnerElement.classList.toggle('d-none');
            statusText.innerHTML = originalStatusText;
        }, 1500);
    } else {
        return
    }
});