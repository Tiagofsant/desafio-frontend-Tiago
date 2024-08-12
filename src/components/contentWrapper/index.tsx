import { Typography, useTheme } from "@mui/material";
import { StyledContainer } from "./styles";

// ------------------------------------------------------------------

export default function ContentWrapper() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Typography
        variant="body2"
        gutterBottom
        color={theme.palette.text.secondary}
      >
        Comédia de amigos
      </Typography>
    </StyledContainer>
  );
}
