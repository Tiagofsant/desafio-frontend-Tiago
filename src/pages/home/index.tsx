import { Card, CardMedia, Stack, styled } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import LabeledBadge from "../../components/labeledBadge";
import CardPicture from "../../components/cardPicture";

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

// -------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          width: "100%",
          height: "100vh",
        }}
      >
        <CardCover />

        <Stack>
          <LabeledBadge label="Destaques Também" />

          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </Stack>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge label="Ultimos Lançamentos" />
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            height: "280px",
          }}
        >
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </Stack>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge label="Recomendandos" />
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            height: "280px",
          }}
        >
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
          <CardMovies score />
        </Stack>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge label="Celebridades" />
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            height: "280px",
          }}
        >
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
          <CardPicture />
        </Stack>
      </Stack>
    </>
  );
}
