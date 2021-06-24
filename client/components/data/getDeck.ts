//Using modified version of getDeck function from THATSOFTWAREDUDE Coding A Card Deck in JavaScript article

export interface card {
  suit: string;
  numberValue: number;
  faceValue: string;
  id: number;
}

const suits = ["spades", "diamonds", "clubs", "hearts"];
const faceCardValues = ["A", "J", "Q", "K"];
const numberCardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export const getDeck = (): card[] => {
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

export const calculateCount = (hand: card[]) => {
  const faceCardArray: string[] = [];
  const numberCardArray: number[] = [];
  const aceArray: string[] = [];
  let count = 0;
  hand.forEach((card) => {
    if (card.faceValue === "A") {
      aceArray.push(card.faceValue);
    } else if (card.faceValue) {
      faceCardArray.push(card.faceValue);
    } else numberCardArray.push(card.numberValue);
  });
  faceCardArray.forEach(() => (count += 10));
  numberCardArray.forEach((card) => (count += card));
  if (aceArray.length === 1) {
    if (count >= 11) {
      count += 1;
    } else {
      count += 11;
    }
  } else if (!aceArray.length) {
    count += 0;
  } else {
    if (count < 10) {
      count += aceArray.length - 1;
      if (count <= 10) {
        count += 11;
      }
    } else {
      count += aceArray.length;
    }
  }
  return count;
};
