import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Bookshelf from "./pages/Bookshelf";
import Blogs from "./pages/Blogs";
import Podcasts from "./pages/Podcasts";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <DrawerAppBar />
        <Container maxWidth={false} disableGutters>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bookshelf" element={<Bookshelf />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/podcasts" element={<Podcasts />} />
            </Routes>
            <Footer />
          </main>
        </Container>
      </div>
    </ThemeProvider>
  );
}
