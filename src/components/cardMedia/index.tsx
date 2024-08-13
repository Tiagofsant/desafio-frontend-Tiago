import { Stack, Typography, useTheme } from "@mui/material";
import ScoreBadge from "../scoreBadge";
import { StyledCard, StyledCardMedia, StyledContainer } from "./styles";

// ------------------------------------------------------------------

export default function CardMedia() {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledCard>
        <StyledCardMedia />
      </StyledCard>

      <Stack spacing={1}>
        <Typography variant="h4" color={theme.palette.text.primary}>
          Rivals
        </Typography>

        <ScoreBadge noBadge />

        <Typography variant="body1" color={theme.palette.text.disabled}>
          Tashi Donaldson <br /> 2024
        </Typography>
      </Stack>
    </StyledContainer>
  );
}
