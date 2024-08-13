import { Stack } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import LabeledBadge from "../../components/labeledBadge";
import { StyledContainer, StyledContent } from "./styles";

// -------------------------------------------------------------------

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

// -------------------------------------------------------------------

export default function Home() {
  return (
    <Stack>
      <StyledContainer>
        <CardCover content={coverContent} />

        <Stack gap={2}>
          <LabeledBadge title="Destaques Também" />
          <CardMovies content={highlightsContent} />
        </Stack>
      </StyledContainer>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Ultimos Lançamentos" />
        </Stack>
        <StyledContent>
          <CardMovies content={highlightsContent} />
        </StyledContent>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Recomendandos" />
        </Stack>
        <StyledContent>
          <CardMovies content={highlightsContent} />
        </StyledContent>
      </Stack>

      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Celebridades" />
        </Stack>
        <StyledContent>
          <CardPicture content={celebritiesContent} />
        </StyledContent>
      </Stack>
    </Stack>
  );
}
