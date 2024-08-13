import { Stack } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import LabeledBadge from "../../components/labeledBadge";
import { StyledContainer, StyledContent } from "./styles";

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
