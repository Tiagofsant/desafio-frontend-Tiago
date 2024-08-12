import { Stack, Typography, useTheme } from "@mui/material";
import ButtonIcon from "../../components/buttonIcon";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import ContentWrapper from "../../components/contentWrapper";
import Iconify from "../../components/iconify";
import LabeledBadge from "../../components/labeledBadge";
import SmallCircle from "../../components/smallCircle";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";
import { StyledContentRow } from "../../global";

// ---------------------------------------------------------------------------

export default function MoviePage() {
  const theme = useTheme();
  const colorPrimary = theme.palette.text.primary;
  const colorSecondary = theme.palette.text.secondary;
  const colorDisabled = theme.palette.text.disabled;

  return (
    <Stack padding={2} gap={2}>
      <StyledCard>
        <StyledCardMedia>
          <StyledCardContent>
            <StyledContent>
              <ButtonIcon />
            </StyledContent>
          </StyledCardContent>
        </StyledCardMedia>
      </StyledCard>

      <StyledContentRow>
        <ContentWrapper />
        <ContentWrapper />
        <ContentWrapper />
        <ContentWrapper />
        <ContentWrapper />
        <ContentWrapper />
      </StyledContentRow>

      {/* ---------------------------------------- SEÇÃO 2 ----------------------- */}

      <StyledContentRow mt={6}>
        <Stack width="60%">
          <StyledContentRow spacing={1} alignItems="center">
            <Typography variant="h1" color={colorPrimary}>
              Deadpool & Wolverine
            </Typography>

            <Iconify icon="noto:star" />
            <Typography variant="h5" color={colorPrimary}>
              8.2
            </Typography>

            <Typography variant="body1" color={colorDisabled}>
              | 120 mil
            </Typography>
          </StyledContentRow>

          <StyledContentRow alignItems="center">
            <Typography variant="body1" color={colorDisabled}>
              2h 8m <SmallCircle /> 18 <SmallCircle /> 2024
            </Typography>
          </StyledContentRow>

          <Typography variant="body1" color={colorSecondary} mt={4}>
            Deadpool recebe uma oferta da Autoridade de Variância Temporal para
            se juntar ao Universo Cinematográfico Marvel, mas em vez disso
            recruta uma variante do Wolverine para salvar seu universo da
            extinção.
          </Typography>
        </Stack>

        <Stack>
          <LabeledBadge title="Direção" subtitle="Shawn Levy" />

          <LabeledBadge
            title="Roteiristas"
            subtitle="Ryan Reynoalds, Rhett Reese, Paul Wernick"
          />

          <LabeledBadge
            title="Artistas"
            subtitle="Ryan Reynoalds, hugh Jackman, Emma Corrin"
          />
        </Stack>

        {/* ---------------------------------------- SEÇÃO 3 ----------------------- */}
      </StyledContentRow>

      <Stack>
        <LabeledBadge title="Elenco principal" />

        <StyledContentRow height={280}>
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
        </StyledContentRow>
      </Stack>

      {/* ---------------------------------------- SEÇÃO 4 ----------------------- */}

      <Stack>
        <LabeledBadge title="Semelhantes" />

        <StyledContentRow height={280}>
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </StyledContentRow>
      </Stack>
    </Stack>
  );
}
