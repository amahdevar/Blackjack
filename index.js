// Blackjack Game on Html.
let player = { // Player object.
    name: "Meysam",
    chips: 12
}
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let sum = 0;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 10) + 2
    return randomNumber
} 
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "

    }
        if (sum <= 20) {
        message = "Do you want to draw another card?";
        
    } else if (sum === 21){
        message = "Blackjack!";
        hasBlackJack = true;
    } else  {
        message = "Your out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;

}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard
    cards = [firstCard,secondCard];
    renderGame();
}
function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}
}