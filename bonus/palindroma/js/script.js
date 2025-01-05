// dichiarazione delle variabili
let word = document.querySelector(".word");
const confirmButton = document.querySelector(".confirm");
let insertedWord = document.querySelector(".insertedWord")
let reversedWord = document.querySelector(".reversedWord");
let reverseWord;
let isPalindrome = document.querySelector(".palindrome");

confirmButton.addEventListener("click", function() {
    word = word.value.toLowerCase();
    insertedWord.innerHTML = `Parola inserita: ${word}`;
    console.log(word);

    // controllo se l'utente ha inserito più di una parola, o se non l'ha inserita
    if (word.includes(" ")) {
        alert("Inserisci una sola parola");
    } else if (word === "") {
        alert("Inserisci una parola valida");
    } else {
        // chiamo la funzione
        palindromeCheck();
    }
});

function palindromeCheck() {
    // trasformo la stringa inserita dall'utente in un array
    const convertedWord = word.split("");
    // console.log(convertedWord);

    // inverto l'ordine degli elementi all'interno dell'array e lo ritrasformo in stringa
    reverseWord = convertedWord.reverse().join("").toLowerCase();
    reversedWord.innerHTML = `Parola invertita: ${reverseWord}`;
    console.log(reverseWord);

    // controllo se la parla inserita è palindroma
    if (word === reverseWord) {
        isPalindrome.innerHTML = "La parola è palindroma";
        console.log("la parola è palindroma");
    } else {
        isPalindrome.innerHTML = "La parola non è palindroma";
        console.log("la parola non è palindroma");
    }
}