import { Button } from "@mui/material";
import Logo from "../../components/logo";
import { StyledContentRow } from "../../global/styles";
import { PATH_PAGE } from "../../routes/paths";

// ---------------------------------------------------------

export default function Header() {
  return (
    <StyledContentRow margin={2} justifyContent="space-between">
      <Logo />
      <StyledContentRow>
        <Button variant="contained" href={PATH_PAGE.home}>
          Home
        </Button>
        <Button variant="contained" href={PATH_PAGE.actor}>
          Página do Ator
        </Button>
        <Button variant="contained" href={PATH_PAGE.movies}>
          Página de Filmes
        </Button>
      </StyledContentRow>
    </StyledContentRow>
  );
}
