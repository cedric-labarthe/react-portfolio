// Import styles
import './App.css';

// Import components
import { useState } from 'react';
import Profil from './components/Profil';
// import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Intro from './components/Into';

function App() {
  const [intro, setIntro] = useState(true);

  return (
    <div className="App">
      {intro ? <Intro setIntro={setIntro} /> : null}
      {/* <Navbar /> */}
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
