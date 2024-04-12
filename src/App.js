import About from './About';
import './App.css';
import NavBar from './NavBar';
import Projects from './Projects';
import Separator from './Separator';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Separator param="About"/>
      <About/>
      <Separator param="Projects"/>
      <Projects/>
      <Separator param="Skills"/>
      <Skills/>
    </div>
  );
}

export default App;
