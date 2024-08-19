// Header.js
import React from 'react';

function Headerlinks({ scrollToHero, scrollToBrowse, scrollToHow, scrollToFaq, scrollToContact }) {
  return (
    <header>
      <nav>
        <button onClick={scrollToHero}>HOME</button>
        <button onClick={scrollToBrowse}>BROWSE</button>
        <button onClick={scrollToHow}>HOW IT WORKS</button>
        <button onClick={scrollToFaq}>FAQs</button>
        <button onClick={scrollToContact}>CONTACT</button>
      </nav>
    </header>
  );
}

export default Headerlinks;
