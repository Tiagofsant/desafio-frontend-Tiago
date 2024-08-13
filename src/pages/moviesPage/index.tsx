import { Stack } from "@mui/material";
import ButtonIcon from "../../components/buttonIcon";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import ContentWrapper from "../../components/contentWrapper";
import LabeledBadge from "../../components/labeledBadge";
import MovieDetails from "../../components/movieDetails";
import { StyledContentRow } from "../../global";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// ---------------------------------------------------------------------------

const highlightsContent = [
  {
    score: 7.5,
    title: "Planeta dos macacos",
    imageUrl:
      "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2023/12/legiao_MVki2_XH54j7.jpg.webp",
  },
];

const celebritiesContent = [
  {
    personName: "Tony Hanks",
    imageUrl:
      "https://cinema10.com.br/upload/personalidades/personalidades_2081_hanksyom.jpg",
  },
];

const coverContent = [
  {
    title: "Veloses e Furiosos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aspernatur quia ab nisi culpa, incidunt enim velit autem dolorem nulla numquam ipsum? Dolore harum fuga doloribus voluptas optio vitae at.",
    score: 10,
    imageUrl:
      "https://itajaishopping.com.br/wp-content/uploads/2023/05/velozes-e-furiosos-10.jpg",
  },
];

const labelContent = [{ label: "Ação" }, { label: "Aventura" }];

// ---------------------------------------------------------------------------

export default function MoviePage() {
  return (
    <Stack gap={2}>
      <StyledCard>
        <StyledCardMedia imageUrl="https://itajaishopping.com.br/wp-content/uploads/2023/05/velozes-e-furiosos-10.jpg">
          <StyledCardContent>
            <StyledContent>
              <ButtonIcon />
            </StyledContent>
          </StyledCardContent>
        </StyledCardMedia>
      </StyledCard>

      <ContentWrapper content={labelContent} />

      <MovieDetails content={coverContent} />

      <LabeledBadge title="Elenco principal" />
      <StyledContentRow height={280}>
        <CardPicture content={celebritiesContent} />
      </StyledContentRow>

      <LabeledBadge title="Semelhantes" />
      <StyledContentRow height={280}>
        <CardMovies content={highlightsContent} />
      </StyledContentRow>
    </Stack>
  );
}
