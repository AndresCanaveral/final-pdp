import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await axios.get(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      );
      setDeckId(response.data.deck_id);
    };

    fetchDeck();
  }, []);

  const drawCard = async () => {
    if (deckId) {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );

      setCards((prevCards) => [...prevCards, response.data.cards[0]]);
    }
  };

  const value = {
    cards,
    drawCard,
  };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}
