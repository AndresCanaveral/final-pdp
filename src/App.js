import React from 'react';
import { GameProvider, useGame } from './pages/GameContext';

function Card({ card }) {
  return (
    <div>
      <img src={card.image} alt={card.code} />
    </div>
  );
}

function Game() {
  const { cards, drawCard } = useGame();

  return (
    <div>
      <h2>Game</h2>
      <button onClick={drawCard}>Draw card</button>
      <div>
        {cards.map((card) => (
          <Card key={card.code} card={card} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <div className="App">
        <h1>Card Game</h1>
        <Game />
      </div>
    </GameProvider>
  );
}

export default App;
