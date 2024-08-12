import { CardMedia, Stack, styled } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import LabeledBadge from "../../components/labeledBadge";

// -------------------------------------------------------------

export const StyledCardMedias = styled(CardMedia)(() => ({
  display: "flex",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/covers/divertidamente.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "100vh",
}));

export const StyledContent = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "280px",
}));

// -------------------------------------------------------------

export default function Home() {
  return (
    <Stack>
      <StyledContainer>
        <CardCover />

        <Stack>
          <LabeledBadge title="Destaques Também" />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </Stack>
      </StyledContainer>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Ultimos Lançamentos" />
        </Stack>
        <StyledContent>
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </StyledContent>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Recomendandos" />
        </Stack>
        <StyledContent>
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </StyledContent>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Celebridades" />
        </Stack>
        <StyledContent>
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
        </StyledContent>
      </Stack>
    </Stack>
  );
}
