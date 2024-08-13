import AuthorDescription from "../../components/authorDescription";
import AuthorWorks from "../../components/authorWorks";
import LabeledBadge from "../../components/labeledBadge";
import { StyledContainer, StyledContent } from "./styles";

// ---------------------------------------------------------------------

const authorContent = [
  {
    authorName: "Zendaya Coleman",
    born: "1 de Setembro de 1996 (27 anos)",
    origin: "Oakland, Califórnia, EUA",
    about:
      "É atriz e produtora, conhecida pelo seu trabalho em Homem-Aranha: De Volta ao Lar (2017), O Rei do Show (2017) e Malcolm & Marie (2021).",
  },
];

// ---------------------------------------------------------------------

export default function AuthorPage() {
  return (
    <StyledContainer>
      <StyledContent>
        <LabeledBadge title="Filmes e Séries" />
        <AuthorWorks />
      </StyledContent>
      <AuthorDescription content={authorContent} />
    </StyledContainer>
  );
}
