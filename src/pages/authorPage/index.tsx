import { Stack, styled } from "@mui/material";
import AuthorDescription from "../../components/authorDescription";
import AuthorWorks from "../../components/authorWorks";
import LabeledBadge from "../../components/labeledBadge";

// ---------------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  padding: "30px",
}));

export const StyledContent = styled(Stack)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));

// ---------------------------------------------------------------------

export default function AuthorPage() {
  return (
    <StyledContainer>
      <StyledContent>
        <LabeledBadge label="Filmes e Séries" />
        <AuthorWorks />
      </StyledContent>
      <AuthorDescription />
    </StyledContainer>
  );
}
