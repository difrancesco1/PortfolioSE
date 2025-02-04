import React, { useState, useMemo } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import content from './content.js';
import rightImage from './assets/images/light-star.png';
import rightImage2 from './assets/images/blue-star.png';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => content, []); // Change this to be in a JSX file.

  return (
    <div className="App">
      <Nav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Hero
        title={items[activeIndex].title}
        paragraph={items[activeIndex].paragraph}
        images={{
          left: rightImage,
          right: rightImage,
          right2: rightImage2
        }}
        activeIndex={activeIndex}  // Pass activeIndex to Hero
      />
    </div>
  );
}

export default App;
