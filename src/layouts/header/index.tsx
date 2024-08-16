import { Button } from "@mui/material";
import Logo from "../../components/logo";
import { StyledContentRow } from "../../global/styles";
import { PATH_PAGE } from "../../routes/paths";
import { Link } from "react-router-dom";

// ---------------------------------------------------------

export default function Header() {
  return (
    <StyledContentRow margin={2} justifyContent="space-between">
      <Link to={PATH_PAGE.home} style={{ textDecoration: "none" }}>
        <Logo />
      </Link>

      <StyledContentRow justifyContent="space-between">
        <Link to={PATH_PAGE.home} style={{ textDecoration: "none" }}>
          <Button variant="contained">Home</Button>
        </Link>

        <Link to={PATH_PAGE.actor} style={{ textDecoration: "none" }}>
          <Button variant="contained">Página do Ator</Button>
        </Link>

        <Link to={PATH_PAGE.movies} style={{ textDecoration: "none" }}>
          <Button variant="contained">Página de Filmes</Button>
        </Link>
      </StyledContentRow>
    </StyledContentRow>
  );
}
