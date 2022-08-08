// This is Meysam test file.

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackJack = false;
let isAlive = true;
let message = ""
sum = firstCard + secondCard;
let cards = [firstCard,secondCard];
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
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
    renderGame();
}
function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
}