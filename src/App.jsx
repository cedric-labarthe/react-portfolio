// Import modules
import { useEffect, useState } from 'react';

// Import styles
import './App.css';

// Import components
import Profil from './components/Profil';
import Navbar from './components/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contacts from './components/Contacts';

function App() {
  const [scrollTop, setScrollTop] = useState(true);
  let prevPos = 0;
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const topPos = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPos(document.documentElement.scrollTop);
    if (prevPos < topPos && topPos !== 0) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
    prevPos = topPos <= 0 ? 0 : topPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrollTop={scrollTop} />
      <Profil scrollPos={scrollPos} />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
