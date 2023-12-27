import './App.css';
import { Route, Routes } from 'react-router-dom';
import StickyFooter from './components/StickyFooter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerAppBar from './components/DrawerAppBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Bookshelf from './components/Bookshelf';
import Blogs from './components/Blogs';
import Podcasts from './components/Podcasts';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <DrawerAppBar></DrawerAppBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/bookshelf" element={<Bookshelf />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/podcasts" element={<Podcasts />}></Route>
        </Routes>
        <StickyFooter></StickyFooter>
      </div>
    </ThemeProvider>
  );
}

export default App;
