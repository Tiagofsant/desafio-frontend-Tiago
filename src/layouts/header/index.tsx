import { Stack, styled } from "@mui/material";
import Logo from "../../components/logo";
import { StyledContainer } from "./styles";

// ---------------------------------------------------------

// ---------------------------------------------------------

export default function Header() {
  return (
    <StyledContainer>
      <Stack margin="10px">
        <Logo />
      </Stack>
    </StyledContainer>
  );
}
