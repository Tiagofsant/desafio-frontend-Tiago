import {
  Button,
  CardActionArea,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Badge from "../badge";
import Iconify from "../iconify";
import SmallCircle from "../smallCircle";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styles";

// -----------------------------------------------------------------------------------

export default function CardCover() {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardMedia>
        <StyledCardContent>
          <Stack
            id="content"
            spacing={2}
            style={{
              width: "70%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: "30px",
              marginBottom: "30px",
            }}
          >
            <Badge />

            <Typography variant="h1" color={theme.palette.text.primary}>
              Deadpool & Wolverine
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Iconify icon="noto:star" />
              <Typography variant="h5" color={theme.palette.text.primary}>
                8.2
              </Typography>

              <Typography variant="body1" color={theme.palette.text.disabled}>
                | 120 mil <SmallCircle /> 2h 8m <SmallCircle /> Comedy, Action,
                Adventure, Superhero <SmallCircle /> 2024
              </Typography>
            </Stack>

            <Typography variant="body1" color={theme.palette.text.secondary}>
              Deadpool recebe uma oferta da Autoridade de Variância Temporal
              para se juntar ao Universo Cinematográfico Marvel, mas em vez
              disso recruta uma variante do Wolverine para salvar seu universo
              da extinção.
            </Typography>

            <Stack display="inline-block">
              <Button
                variant="contained"
                endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
              >
                Assistir ao trailer
              </Button>
            </Stack>
          </Stack>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
