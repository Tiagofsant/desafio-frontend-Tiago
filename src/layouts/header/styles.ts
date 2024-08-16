import { Stack, styled } from "@mui/material";

// -----------------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-between",
  overflow: "hidden",
}));
