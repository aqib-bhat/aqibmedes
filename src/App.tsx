import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import CurriculumVitae from './components/CurriculumVitae';

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
            <Link to="/curriculum-vitae">Curriculum Vitae (CV)</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/curriculum-vitae" element={<CurriculumVitae />}></Route>
      </Routes>
    </div>
  );
}

export default App;
