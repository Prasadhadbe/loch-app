// Testimonial Cards.js
import React from "react";

const TCard1 = () => {
  return (
    <div className="card">
      <div className="card-header-row">
        <p className="card-title">Jack F</p>
        <p className="card-subtitle">Ex Blackrock PM</p>
      </div>
      <div className="card-data">
        “Love how Loch integrates portfolio
        <br /> analytics and whale watching into one
        <br /> unified app.”
      </div>
    </div>
  );
};

const TCard2 = () => {
  return (
    <div className="card">
      <div className="card-header-row">
        <p className="card-title">Yash P</p>
        <p className="card-subtitle">Research, 3poch Crypto Hedge Fund</p>
      </div>
      <div className="card-data">
        “I use Loch everyday now. I don't think I <br />
        could analyze crypto whale trends
        <br /> markets without it. I'm addicted!”
      </div>
    </div>
  );
};

const TCard3 = () => {
  return (
    <div className="card">
      <div className="card-header-row">
        <p className="card-title">Shiv S</p>
        <p className="card-subtitle">Co-Founder Magik Labs</p>
      </div>
      <div className="card-data">
        “Managing my own portfolio is helpful and well designed. What’s
        <br /> really interesting is watching the whales though. No one else
        <br /> has made whale tracking so simple.”
      </div>
    </div>
  );
};

export const tCardsArray = [TCard1, TCard2, TCard3];
