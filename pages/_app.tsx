import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import DrawerAppBar from "../src/components/DrawerAppBar";
import Footer from "../src/components/Footer";
import "../src/App.css";
import "../src/index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <DrawerAppBar />
        <Container maxWidth={false} disableGutters>
          <main>
            <Component {...pageProps} />
            <Footer />
          </main>
        </Container>
      </div>
    </ThemeProvider>
  );
}
