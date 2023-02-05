import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { Projects } from './Components/project';
import ChakraNavbar from './Components/chakraNavbar';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <ChakraNavbar />
      <Homepage />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
