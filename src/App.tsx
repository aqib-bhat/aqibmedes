import './App.css';
import { Route, Routes } from 'react-router-dom';
import StickyFooter from './components/StickyFooter';
import SelectedListItem from './components/SelectedListItem';
import { Box, Grid, Paper } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Item><SelectedListItem></SelectedListItem></Item>
            </Grid>
            <Grid item xs={11}>
              <Item>
                <header className="App-header">
                  <Typography variant="h2" gutterBottom>Aqib Niaz Bhat</Typography>
                </header>
                <div className="App">
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
              </Item>
            </Grid>
          </Grid>
        </Box>
    </ThemeProvider>
  );
}

export default App;
