import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
