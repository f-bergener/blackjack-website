//Using modified version of getDeck function from THATSOFTWAREDUDE Coding A Card Deck in JavaScript article

const suits = ["spades", "diamonds", "clubs", "hearts"];
const faceCardValues = ["A", "J", "Q", "K"];
const numberCardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];

interface card {
  suit: string;
  numberValue: number;
  faceValue: string;
  id: number;
}

const getDeck = (): card[] => {
  const deck: card[] = [];
  let y = 0;
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numberCardValues.length; j++) {
      const card = {
        suit: suits[i],
        numberValue: numberCardValues[j],
        faceValue: "",
        id: y,
      };
      deck.push(card);
      y++;
    }
    for (let j = 0; j < faceCardValues.length; j++) {
      const card = {
        suit: suits[i],
        numberValue: 0,
        faceValue: faceCardValues[j],
        id: y,
      };
      deck.push(card);
      y++;
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
