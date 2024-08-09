import { ThemeProvider } from "@mui/material";
import Footer from "./layouts/footer";
import Home from "./pages/home";
import theme from "./theme";
import Header from "./layouts/header";

// -------------------------------------------------

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
