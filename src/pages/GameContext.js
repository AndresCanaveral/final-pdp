import React, { createContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider(props) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isWon, setIsWon] = useState(false);

  const drawCard = () => {
    const randomCard = Math.floor(Math.random() * 10) + 1;
    setCards([...cards, randomCard]);
    setSelectedCard(randomCard);
    checkWin(randomCard);
  };

  const checkWin = (card) => {
    const oppositeCard = getOppositeCard(card);
    if (cards.includes(oppositeCard)) {
      setIsWon(true);
    }
  };

  const getOppositeCard = (card) => {
    return card > 5 ? card - 5 : card + 5;
  };

  return (
    <GameContext.Provider
      value={{
        cards,
        selectedCard,
        isWon,
        drawCard,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return React.useContext(GameContext);
}
