//create the number blocks on screen face down, with the back of the card face up
// to do this have pairs of nubmers saved in list and then loop through to randomly position
//the images have ids that are the nubmers that they correspond with
//when clicked they turn face up and if they have the same id, remove
//if different id turn back down
//win when all removed from screen

let listOfNumbers = [];

let button = document.querySelector("button");
button.addEventListener("click", createNumbers);

let table = document.querySelector("div");

function createNumbers() {
    let number = document.querySelector("max");
    let currentNum = 1;
    for (let i = 0; i < number.value; i+=2) {
        listOfNumbers[i] = currentNum;
        listOfNumbers[i+1] = currentNum;
        currentNum++;
    }
    for (let i = 0; i < listOfNumbers.length; i ++) {
        let numElm = document.createElement("p");
        table.appendChild(numElm);
        numElm.textContent = "click";
        numElm.className = "cardBack";
        numElm.id = listOfNumbers[i];
        numElm.addEventListener("click", flip);
    }
}
function flip() {

}


