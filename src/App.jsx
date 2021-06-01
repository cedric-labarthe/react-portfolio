// Import modules
import { useEffect, useState, useContext } from 'react';

// Import styles
import './App.css';

// Import components
import Profil from './components/Profil';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Intro from './components/Into';
import DotRing from './components/DotRing';
import { MouseContext } from './context/mouse-context';

function App() {
  const [intro, setIntro] = useState(true);
  const [scrollTop, setScrollTop] = useState(true);
  let prevPos = 0;

  const { cursorChangeHandler } = useContext(MouseContext);

  const handleScroll = () => {
    const topPos = window.pageYOffset || document.documentElement.scrollTop;
    console.log(topPos);
    if (prevPos < topPos && topPos !== 0) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
    prevPos = topPos <= 0 ? 0 : topPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <DotRing />
      <div
        onMouseEnter={() => cursorChangeHandler('hovered')}
        onMouseLeave={() => cursorChangeHandler('')}
      />

      {intro ? <Intro setIntro={setIntro} /> : null}
      <Navbar scrollTop={scrollTop} />
      {!intro ? (
        <>
          <Profil />
          <Skills />
          <Projects />
          <Contacts />
        </>
      ) : null}
    </div>
  );
}

export default App;
