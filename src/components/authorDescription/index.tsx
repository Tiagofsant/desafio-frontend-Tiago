import { Typography, useTheme } from "@mui/material";
import { StyledCard, StyledCardMedia, StyledContainer } from "./styles";

// ---------------------------------------------------------------------

export default function AuthorDescription() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledCard>
        <StyledCardMedia />
      </StyledCard>

      <Typography variant="h3" gutterBottom color={theme.palette.text.primary}>
        Zendaya Coleman
      </Typography>

      <Typography
        variant="subtitle2"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        Nascido (a) em:
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        1 de Setembro de 1996 (27 anos)
      </Typography>

      <Typography
        variant="subtitle2"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        Origem:
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        Oakland, Califórnia, EUA
      </Typography>

      <Typography
        variant="subtitle2"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        Sobre:
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color={theme.palette.text.disabled}
      >
        É atriz e produtora, conhecida pelo seu trabalho em Homem-Aranha: De
        Volta ao Lar (2017), O Rei do Show (2017) e Malcolm & Marie (2021).
      </Typography>
    </StyledContainer>
  );
}
