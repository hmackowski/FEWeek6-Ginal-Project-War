class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
}

class Game {
    constructor(){
        this.player1Score = 0;
        this.player2Score = 0;
        this.deck = this.makeDeck();
        this.player1 = new Player(prompt('Please enter Player 1s name.'));
        this.player2 = new Player(prompt('Please enter Player 2s name.'));
        this.splitDeck();
        this.playGame();
    }
    
    //Splits deck between the 2 players
    splitDeck(){
        this.player1.hand = this.deck.splice(0,26);
        this.player2.hand = this.deck.splice(0,26);
    }

    //Builds the deck
    makeDeck(){
        let newDeck = [];
        let face = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
        let suits = ["💧", "🍀", "🔥", "🪨"];
        
        //Loop iterates through faces and suits and creates a card with a face, a suit, and a cardValue then adds it to newDeck.
        for (let s of suits) {
            let cardValue = 2;
            for(let f of face){                
                let card = new Card(f,s, cardValue);                
                newDeck.push(card);
                //console.log(cardValue);
                cardValue++;
            }     
        }
        
        // Shuffle the deck of cards using the Fisher-Yates shuffle algorithm
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newDeck[i];
            newDeck[i] = newDeck[j];
            newDeck[j] = temp;
          }
        return newDeck;
    }

    playGame(){
        // Loop through 26 rounds of the game, one for each card in the players' hands
        for(let i = 0; i <= 25; i++){
            console.log(`${this.player1.name} drew a: ${this.player1.hand[0].face} of ${this.player1.hand[0].suit}`);
            console.log(`${this.player2.name} drew a: ${this.player2.hand[0].face} of ${this.player2.hand[0].suit}`);
           
            // Compare the card values to determine the winner of the round and update scores
            if(this.player1.hand[0].cardValue > this.player2.hand[0].cardValue){
                console.log(`${this.player1.name} won this round.\n\n`)
                this.player1Score++;
            } else if(this.player2.hand[0].cardValue > this.player1.hand[0].cardValue){
                console.log(`${this.player2.name} won this round.\n\n`)
                this.player2Score++;
            } else{
                console.log('Round is a draw!\n\n')
            }

            // Remove the cards played in this round from each player's hand
            this.player1.hand.splice(0,1);
            this.player2.hand.splice(0,1);           
        }

        // Display the final scores and declare the winner or tie
        console.log('----------------------------');
        console.log(`${this.player1.name} has a score of: ${this.player1Score}`);
        console.log(`${this.player2.name} has a score of: ${this.player2Score}`);
        if(this.player1Score > this.player2Score){
            return alert(`${this.player1.name} has won the game of war with a score of ${this.player1Score}!`);
        } else if (this.player1Score < this.player2Score){
           return alert(`${this.player2.name} has won the game of war with a score of ${this.player2Score}!`);
        } else {
           return alert('The result of the game ended in a tie!');
        }


    }
}

class Card {
    constructor(face, suit, cardValue){
        this.face = face;
        this.suit = suit;
        this.cardValue = cardValue;
    }

}

//initializes a new game
let game = new Game();

//Created a function to test

function addNum(a,b){
    if (a + b === 5){
        return a + b;
    } else{
        throw Error('mistakes were made');
    }
    
}
