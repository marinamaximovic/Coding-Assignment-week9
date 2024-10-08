// WAR CARD GAME
// 3 classes: Card, Player, Deck
// 2 players, each 26 cards
// Discpla

// This class stores name, value and suit of each card.

class Card {
  constructor(name, value, suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
  }
}
class Deck {
  constructor() {
    this.deck = []; //empty, but it will store 52 cards (4 suits and 13 values)
    this.createDeck(); // creating a deck of cards
    this.shuffle(); // shuffle the deck
  }

  createDeck() {
    // method to create 52 cards deck
    let values = [
      { name: "Ace", value: 1 }, // giving them a value, because of "Ace", "Jack", "Queen" and "King"
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
      { name: "Jack", value: 12 },
      { name: "Queen", value: 13 },
      { name: "King", value: 14 },
    ];
    let suits = ["Hearts ❤️", "Spades 🗡️", "Diamonds 💎", "Clubs🍀"]; // suits array

    // this loop should create 52 cards
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        // creating a new card with name, value and suit
        let card = new Card(values[i].name, values[i].value, suits[j]);
        // .push method will add card to the deck array
        this.deck.push(card);
      }
    }
  }

  // shuffle the deck using Fisher-Yates algorithm
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // exchange the position of the current card with a randomly chosen card from the deck
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  // each player is getting 26 cards
  deal(player1, player2) {
    for (let i = 0; i < 26; i++) {
      player1.hand.push(this.deck.pop());
      player2.hand.push(this.deck.pop());
    }
  }
}
// creating player class and their properties
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.hand = [];
  }

  // this method is removing the first card from the hand
  playCard() {
    return this.hand.shift(); //
  }
  // increase the player's score by 1
  addPoint() {
    this.score++;
  }
}

// game logic
const myDeck = new Deck();
console.log(myDeck.deck); // showing the shuffled deck
const player1 = new Player("player 1"); // creating player 1
const player2 = new Player("player 2"); // creating player 2

myDeck.deal(player1, player2); // dealing cards to both players

//console.log(`${player1.name} hand:`, player1.hand);
//console.log(`${player2.name} hand:`, player2.hand);

// comparing cards and calculating points between player 1 and player 2
for (let i = 0; i < player1.hand.length; i++) {
  if (player1.hand[i].value > player2.hand[i].value) {
    player1.addPoint();
    console.log(`
         Player1 Card: ${player1.hand[i].value} of ${player1.hand[i].suit}
         Player2 Card: ${player2.hand[i].value} of ${player2.hand[i].suit}
         Player 1 wins the round!
         Result: Player1: ${player1.score}, Player2: ${player2.score}
          `);
  } else if (player2.hand[i].value > player1.hand[i].value) {
    player2.addPoint();
    console.log(`
          Player1 Card: ${player1.hand[i].value} of ${player1.hand[i].suit}
          Player2 Card: ${player2.hand[i].value} of ${player2.hand[i].suit}
          Player 2 wins the round!
          Result: Player1: ${player1.score}, Player2: ${player2.score}
          `);
  } else {
    console.log(`
          Player1 Card: ${player1.hand[i].value} of ${player1.hand[i].suit}
          Player2 Card: ${player2.hand[i].value} of ${player2.hand[i].suit}
          Tie: No point in this round!  
          Result: Player1: ${player1.score}, Player2: ${player2.score}
          `);
  }
}

// display a winner based on scores
if (player1.score > player2.score) {
  console.log("Player 1 is the winner!");
} else if (player2.score > player1.score) {
  console.log("Player 2 is the winner");
} else {
  console.log("There is no winner in this game, it's a tie!");
}
