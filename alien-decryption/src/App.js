import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const signals = ["👽", "🛸", "🌌", "🔭", "🪐", "☄️", "🚀", "🌠"];

    const duplicated = [...signals, ...signals];

    const shuffled = duplicated
      .map(signal => ({ id: Math.random(), signal }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, []);

  const handleCardClick = (card, index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(card.signal)
    ) {
      return;
    }

    if (!gameStarted) setGameStarted(true);

    setFlippedCards(prev => [...prev, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (cards[first].signal === cards[second].signal) {
        setMatchedCards(prev => [...prev, cards[first].signal]);
        setScore(prev => prev + 100);
        setFlippedCards([]);
      } else {
        setScore(prev => prev - 10);

        setTimeout(() => {
          setFlippedCards([]);
        }, 800);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    let timer;
    if (gameStarted) {
      timer = setInterval(() => setTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted]);

  useEffect(() => {
    if (matchedCards.length === 8) {
      alert(`🚀 Decryption Complete!\nScore: ${score}\nTime: ${time}s`);
    }
  }, [matchedCards]);

  return (
    <div className="app">
      <h1 className="title">👽 Alien Signal Decryption</h1>

      <div className="stats">
        <div>Score: <span>{score}</span></div>
        <div>Time: <span>{time}s</span></div>
      </div>

      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card, index)}
            isFlipped={flippedCards.includes(index)}
            isMatched={matchedCards.includes(card.signal)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;