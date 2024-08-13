import AuthorDescription from "../../components/authorDescription";
import AuthorWorks from "../../components/authorWorks";
import LabeledBadge from "../../components/labeledBadge";
import { StyledContainer, StyledContent } from "./styles";

// ---------------------------------------------------------------------

export default function AuthorPage() {
  return (
    <StyledContainer>
      <StyledContent>
        <LabeledBadge title="Filmes e Séries" />
        <AuthorWorks />
      </StyledContent>
      <AuthorDescription />
    </StyledContainer>
  );
}
