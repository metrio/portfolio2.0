import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Blog from './Components/Blog/Blog';
import NavBar from './Components/Navigation/Navbar';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </>
  );
}

export default App;
