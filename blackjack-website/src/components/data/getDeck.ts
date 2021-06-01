//Using modified version of getDeck function from THATSOFTWAREDUDE Coding A Card Deck in JavaScript article

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const getDeck = () => {
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const card = {
        suit: suits[i],
        value: values[j],
        id: (i + 1) * (j + 1),
      };
      deck.push(card);
    }
  }
  for (let i = 0; i < 2000; i++) {
    const location1 = Math.floor(Math.random() * deck.length);
    const location2 = Math.floor(Math.random() * deck.length);
    [deck[location1], deck[location2]] = [deck[location2], deck[location1]];
  }
  return deck;
};

export default getDeck;
