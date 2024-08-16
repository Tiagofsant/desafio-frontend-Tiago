import { Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

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
