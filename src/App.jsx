// Import styles
import './App.css';

// Import components
import Profil from './components/Profil';
// import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Profil />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
