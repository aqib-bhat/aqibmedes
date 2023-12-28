import './App.css';
import { Route, Routes } from 'react-router-dom';
import StickyFooter from './components/StickyFooter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerAppBar from './components/DrawerAppBar';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Resume from './views/Resume';
import Contact from './views/Contact';
import Bookshelf from './views/Bookshelf';
import Blogs from './views/Blogs';
import Podcasts from './views/Podcasts';

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
