import { Stack, styled } from "@mui/material";

// ---------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  overflow: "hidden",
}));

// ---------------------------------------------------------

export default function Header() {
  return (
    <StyledContainer>
      <Stack margin="10px">
        <img src="images/logo/logo.png" alt="Logotipo" width="150px" />
      </Stack>
    </StyledContainer>
  );
}
