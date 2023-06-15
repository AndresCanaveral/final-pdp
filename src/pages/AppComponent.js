import React from 'react';
import { useGame } from './GameContext';

export function ImageComponent() {
  const { gameState } = useGame();
  const { currentCard } = gameState;

  return (
    <div>
      {currentCard && (
        <img src={currentCard.image} alt={`${currentCard.value} of ${currentCard.suit}`} />
      )}
    </div>
  );
}

export function FormComponent() {
  const { startGame, drawCard, checkMatch, resetGame } = useGame();

  const handleStartGame = () => {
    startGame();
  };

  const handleDrawCard = () => {
    drawCard();
    checkMatch();
  };

  const handleResetGame = () => {
    resetGame();
  };

  return (
    <div>
      <button onClick={handleStartGame}>Empezar</button>
      <button onClick={handleDrawCard}>Elegir</button>
      <button onClick={handleResetGame}>Reiniciar juego</button>
    </div>
  );
}

export function AppComponent() {
  return (
    <div>
      <h1>Combinacion</h1>
      <ImageComponent />
      <FormComponent />
    </div>
  );
}
