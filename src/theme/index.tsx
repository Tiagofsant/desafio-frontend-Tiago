import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#191919",
      paper: "#313131",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#EEEEEE",
      disabled: "#B4B4B4",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.3rem",
    },
    body2: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1.3rem",
    },
    subtitle2: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "15px",
          padding: "10px 20px",
          textTransform: "none",
          fontSize: "20px",
          fontWeight: "600",
          backgroundColor: "rgba(60, 60, 60, 0.6)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(60, 60, 60, 0.8)",
          },
        },
      },
    },
  },
});

export default theme;
