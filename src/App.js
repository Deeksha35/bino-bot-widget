import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    const message = encodeURIComponent("Hi Bino, I want to know about job opportunities in Bangalore!");
    const phoneNumber = "918762192191"; // Bino WhatsApp number (change if needed)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bino-bot">
      <button onClick={handleClick} className="bino-button">Chat with Bino</button>
    </div>
  );
}

export default App;
