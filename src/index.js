let sum=0
let cards=[]
let hasBlackjack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
// querySelector is more generic, # refers to CSS selector
let sumEl = document.querySelector('#sum-el')

let player = {
    name: "Per",
    chips: 145,
    // Methods in object
    sayHello: function() {
        console.log("Hello!")
    }
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getCard()
    let secondCard = getCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent =  "Sum: " + sum

    if (sum < 21){
        message = 'Do you want to draw a new card?'
    }
    else if (sum === 21){
        message = "You've got Blackjack! :o"
        hasBlackjack = true
    }
    else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function getCard(){
    let num = Math.floor(Math.random()*13 + 1)
    // Convert J,Q,K to 10. Ace will be treated as 11
    if(num>10){
        return 10
    } else if(num === 1){
        return 11
    }else{
        return num
    }
}


function newCard(){
    if(isAlive===true && hasBlackjack===false){
        thirdCard = getCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }

}
