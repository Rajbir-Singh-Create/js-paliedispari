// inizializzo le variabili
let word = "";
let reverseWord = "";

// faccio inserire la parola all'utente
word = prompt("Inserisci una parola");
word = word.toLowerCase();
console.log(word);

function palindromeCheck(){
    // trasformo la stringa inserita dall'utente in un array
    const convertedWord = word.split("");
    // console.log(convertedWord);

    // inverto l'ordine degli elementi all'interno dell'array e lo ritrasformo in stringa
    reverseWord = convertedWord.reverse().join("").toLowerCase();
    console.log(reverseWord);

    // controllo se la parla inserita è palindroma
    if(word === reverseWord){
        console.log("la parola è palindroma");
    } else {
        console.log("la parola non è palindroma")
    }
}

// chiamo la funzione
palindromeCheck();