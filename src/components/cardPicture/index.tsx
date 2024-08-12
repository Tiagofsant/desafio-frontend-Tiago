import { Typography, useTheme } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// -----------------------------------------------------------------------------------

export default function CardPicture() {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardMedia>
        <StyledCardContent>
          <StyledContent spacing={1}>
            <Typography variant="h4" color={theme.palette.text.primary}>
              Zendaya
            </Typography>

            <Typography variant="body1" color={theme.palette.text.disabled}>
              Nome do Personagem
            </Typography>
          </StyledContent>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
