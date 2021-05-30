// Import styles
import './App.css';

// Import components
import { useEffect, useState } from 'react';
import Profil from './components/Profil';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Intro from './components/Into';

function App() {
  const [intro, setIntro] = useState(true);
  const [scrollTop, setScrollTop] = useState(false);
  let prevPos = 0;

  const handleScroll = () => {
    const topPos = window.pageYOffset || document.documentElement.scrollTop;
    if (prevPos < topPos) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
    console.log(scrollTop, prevPos, topPos);
    prevPos = topPos <= 0 ? 0 : topPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {intro ? <Intro setIntro={setIntro} /> : null}
      {scrollTop ? <Navbar /> : null}
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
