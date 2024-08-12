import { ThemeProvider } from "@mui/material";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import MoviePage from "./pages/moviesPage";
import theme from "./theme";
import AuthorPage from "./pages/authorPage";
import Home from "./pages/homePage";

// -------------------------------------------------

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Home /> */}
        {/* <AuthorPage /> */}
        <MoviePage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
