// Import modules
import { useEffect, useState } from 'react';

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

function App() {
  const [intro, setIntro] = useState(true);
  const [scrollTop, setScrollTop] = useState(true);
  let prevPos = 0;
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const topPos = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPos(document.documentElement.scrollTop);
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
      {intro ? <Intro setIntro={setIntro} /> : null}
      <Navbar scrollTop={scrollTop} />
      {!intro ? (
        <>
          <DotRing />
          <Profil scrollPos={scrollPos} />
          <Skills />
          <Projects />
          <Contacts />
        </>
      ) : null}
    </div>
  );
}

export default App;
