let listOfNumbers = [];

let buttonCreate = document.getElementById("CreateButton");
buttonCreate.addEventListener("click", createNumbers);

let buttonCheck = document.getElementById("CheckButton");
buttonCheck.addEventListener("click", checkIfMatch);

let table = document.querySelector("div");


let cards = [];

function createNumbers() {
    alert("Welcome to the matching game! When the cards pop up on the screen click two to try and find the matching pair! The program will automatically check it for you, but if you accidentally click more than two, you can always click the check button at the bottom of the screen. Keep going until you got all of them!");
    let number = document.getElementById("max");
    let speed = document.getElementById("speed");
    let currentNum = 1;
    for (let i = 0; i < number.value * 2; i+=2) {
        listOfNumbers[i] = currentNum;
        listOfNumbers[i+1] = currentNum;
        currentNum++;
    }
    let len = listOfNumbers.length;
    for (let j = 0; j < len; j++) {
        let i = Math.floor(Math.random() * listOfNumbers.length);
        let numElm = document.createElement("p");
        table.appendChild(numElm);
        numElm.textContent = "click";
        numElm.className = "cardBack";
        numElm.id = listOfNumbers[i];
        numElm.addEventListener("click", flip);
        listOfNumbers.splice(i, 1);
    }
    setInterval(callCheckIfMatch, speed.value * 1000);

}

function callCheckIfMatch() {
    let cardsUp = document.getElementsByClassName("cardFront");
    cards = [];
    for (let i = 0; i < cardsUp.length; i++) {
        cards[i] = cardsUp[i];
    }
    if (cards.length == 2) {
        checkIfMatch();
    }
}

function flip(event) {
    let num = event.currentTarget;
    num.classList.add("cardFront");
    num.classList.remove("cardBack");
    num.textContent = num.id;  
}
function checkIfMatch() {
    if (cards[0].id == cards[1].id) {
        table.removeChild(cards[0]);
        table.removeChild(cards[1]);
        if (table.childElementCount == 0) {
            alert("Congrats, you matched all the pairs! To play again enter the amount of pairs you want and click create.");
        }
    }
    else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].textContent = "click";
            cards[i].className = "cardBack";
        }
    }
}