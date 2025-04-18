import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import ProjectContainer from './components/Work/ProjectContainer.js';
import ProjectDetail from './components/Work/Projects/ProjectDetail.js'; // Detail Page
import content from './content.js';
import rightImage from './assets/images/light-star.png';
import rightImage2 from './assets/images/blue-star.png';

// Wrapper component for using Router context
const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => content, []);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();
    const index = ['work', 'about', 'experience', 'skills', 'contact'].indexOf(hash);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location]);

  return (
    <div className="App">
      <Nav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero
                title={items[activeIndex].title}
                paragraph={items[activeIndex].paragraph}
                images={{ left: rightImage, right: rightImage, right2: rightImage2 }}
                activeIndex={activeIndex}
              />
              {activeIndex === 0 && <ProjectContainer />}
              {activeIndex === 1 && <ProjectContainer />}
            </>
          }
        />

        {/* Dynamic Project Page */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default AppWithRouter;
