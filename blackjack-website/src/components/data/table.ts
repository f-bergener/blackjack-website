import { ActionConstants } from "../../redux/actionConstants";
import { card } from "./getDeck";

const { DOUBLE_DOWN, HIT, SPLIT, STAY } = ActionConstants;

type Action = typeof STAY | typeof HIT | typeof SPLIT | typeof DOUBLE_DOWN;

// HandRow interfaces
interface HandRow {
  readonly [index: string]: Action;
  readonly [index: number]: Action;
}

interface DealerCardIndex {
  readonly [index: string]: HandRow;
  readonly [index: number]: HandRow;
}

interface HandRows {
  readonly [index: string]: DealerCardIndex;
  readonly [index: number]: DealerCardIndex;
}

const handRows: HandRows = {
  A: {
    10: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
    9: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
    8: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
    7: {
      2: STAY,
      3: DOUBLE_DOWN,
      4: DOUBLE_DOWN,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: STAY,
      8: STAY,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    6: {
      2: HIT,
      3: DOUBLE_DOWN,
      4: DOUBLE_DOWN,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    5: {
      2: HIT,
      3: HIT,
      4: DOUBLE_DOWN,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    4: {
      2: HIT,
      3: HIT,
      4: DOUBLE_DOWN,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    3: {
      2: HIT,
      3: HIT,
      4: HIT,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    2: {
      2: HIT,
      3: HIT,
      4: HIT,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
    A: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: SPLIT,
      8: SPLIT,
      9: SPLIT,
      10: SPLIT,
      J: SPLIT,
      Q: SPLIT,
      K: SPLIT,
      A: SPLIT,
    },
  },
  8: {
    8: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: SPLIT,
      8: SPLIT,
      9: SPLIT,
      10: SPLIT,
      J: SPLIT,
      Q: SPLIT,
      K: SPLIT,
      A: SPLIT,
    },
  },
  K: {
    K: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
  },
  Q: {
    Q: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
  },
  J: {
    J: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
  },
  10: {
    10: {
      2: STAY,
      3: STAY,
      4: STAY,
      5: STAY,
      6: STAY,
      7: STAY,
      8: STAY,
      9: STAY,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
  },
  9: {
    9: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: STAY,
      8: SPLIT,
      9: SPLIT,
      10: STAY,
      J: STAY,
      Q: STAY,
      K: STAY,
      A: STAY,
    },
  },
  7: {
    7: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: SPLIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
  6: {
    6: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
  5: {
    5: {
      2: DOUBLE_DOWN,
      3: DOUBLE_DOWN,
      4: DOUBLE_DOWN,
      5: DOUBLE_DOWN,
      6: DOUBLE_DOWN,
      7: DOUBLE_DOWN,
      8: DOUBLE_DOWN,
      9: DOUBLE_DOWN,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
  4: {
    4: {
      2: HIT,
      3: HIT,
      4: HIT,
      5: SPLIT,
      6: SPLIT,
      7: HIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
  3: {
    3: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: SPLIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
  2: {
    2: {
      2: SPLIT,
      3: SPLIT,
      4: SPLIT,
      5: SPLIT,
      6: SPLIT,
      7: SPLIT,
      8: HIT,
      9: HIT,
      10: HIT,
      J: HIT,
      Q: HIT,
      K: HIT,
      A: HIT,
    },
  },
};

// Inter face for CountRows and PostMoveCountRows

interface CountRow {
  readonly [index: string]: Action;
  readonly [index: number]: Action;
}

interface CountRows {
  readonly [index: string]: CountRow;
  readonly [index: number]: CountRow;
}

const countRows: CountRows = {
  20: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  19: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  18: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  17: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  16: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  15: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  14: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  13: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  12: {
    2: HIT,
    3: HIT,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  11: {
    2: DOUBLE_DOWN,
    3: DOUBLE_DOWN,
    4: DOUBLE_DOWN,
    5: DOUBLE_DOWN,
    6: DOUBLE_DOWN,
    7: DOUBLE_DOWN,
    8: DOUBLE_DOWN,
    9: DOUBLE_DOWN,
    10: DOUBLE_DOWN,
    J: DOUBLE_DOWN,
    Q: DOUBLE_DOWN,
    K: DOUBLE_DOWN,
    A: HIT,
  },
  10: {
    2: DOUBLE_DOWN,
    3: DOUBLE_DOWN,
    4: DOUBLE_DOWN,
    5: DOUBLE_DOWN,
    6: DOUBLE_DOWN,
    7: DOUBLE_DOWN,
    8: DOUBLE_DOWN,
    9: DOUBLE_DOWN,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  9: {
    2: HIT,
    3: DOUBLE_DOWN,
    4: DOUBLE_DOWN,
    5: DOUBLE_DOWN,
    6: DOUBLE_DOWN,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  8: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  7: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  6: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  5: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
};

const postMoveCountRows: CountRows = {
  20: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  19: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  18: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  17: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: STAY,
    8: STAY,
    9: STAY,
    10: STAY,
    J: STAY,
    Q: STAY,
    K: STAY,
    A: STAY,
  },
  16: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  15: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  14: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  13: {
    2: STAY,
    3: STAY,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  12: {
    2: HIT,
    3: HIT,
    4: STAY,
    5: STAY,
    6: STAY,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  11: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  10: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  9: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  8: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  7: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  6: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  5: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  4: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  3: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
  2: {
    2: HIT,
    3: HIT,
    4: HIT,
    5: HIT,
    6: HIT,
    7: HIT,
    8: HIT,
    9: HIT,
    10: HIT,
    J: HIT,
    Q: HIT,
    K: HIT,
    A: HIT,
  },
};

export const initialHandGetBestMove = (
  playerHand: card[],
  dealerHand: card[],
  playerCount: number
): string => {
  let cardOne = playerHand[0];
  let cardTwo = playerHand[1];
  let dealerFace = dealerHand[1].faceValue;
  let dealerNumber = dealerHand[1].numberValue;
  // Check if the dealer's card is a number card or a K, Q, J, A
  if (dealerNumber) {
    if (
      cardOne.faceValue &&
      cardTwo.faceValue &&
      cardOne.faceValue === cardTwo.faceValue
    ) {
      return handRows[cardTwo.faceValue][cardOne.faceValue][dealerNumber];
    }
    if (
      cardOne.numberValue &&
      cardTwo.numberValue &&
      cardOne.numberValue === cardTwo.numberValue
    ) {
      return handRows[cardOne.numberValue][cardTwo.numberValue][dealerNumber];
    }
    return countRows[playerCount][dealerNumber];
  } else {
    if (
      cardOne.faceValue &&
      cardTwo.faceValue &&
      cardOne.faceValue === cardTwo.faceValue
    ) {
      return handRows[cardOne.faceValue][cardTwo.faceValue][dealerFace];
    }
    if (
      cardOne.numberValue &&
      cardTwo.numberValue &&
      cardOne.numberValue === cardTwo.numberValue
    ) {
      return handRows[cardOne.numberValue][cardTwo.numberValue][dealerFace];
    }
    return countRows[playerCount][dealerFace];
  }
};

export const postFirstMoveGetBestHand = (
  dealerHand: card[],
  playerCount: number
) => {
  let dealerFace = dealerHand[1].faceValue;
  let dealerNumber = dealerHand[1].numberValue;
  if (dealerNumber) {
    return postMoveCountRows[playerCount][dealerNumber];
  } else return postMoveCountRows[playerCount][dealerFace];
};
