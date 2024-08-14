import { Stack } from "@mui/material";
import Logo from "../../components/logo";
import { StyledContainer } from "./styles";

// ---------------------------------------------------------

export default function Header() {
  return (
    <StyledContainer>
      <Stack>
        <Logo />
      </Stack>
    </StyledContainer>
  );
}
