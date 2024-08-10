import {
  Card,
  CardMedia,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

// ---------------------------------------------------------------------

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "350px",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  border: `5px solid ${theme.palette.background.paper}`,
  marginBottom: "30px",
  marginRight: "30px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/celebrities/zendaya.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledContainer = styled(Stack)(() => ({
  width: "600px",
  padding: "0px 10px",
}));

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
