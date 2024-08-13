import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Routes from "./routes";
import theme from "./theme";
import { Stack } from "@mui/material";

// ---------------------------------------------------------------

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <Stack padding={4}>
            <Routes />
          </Stack>
        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
