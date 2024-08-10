import { ThemeProvider } from "@mui/material";
import Footer from "./layouts/footer";
import Home from "./pages/home";
import theme from "./theme";
import Header from "./layouts/header";
import AuthorPage from "./pages/authorPage";

// -------------------------------------------------

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Home /> */}
        <AuthorPage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
