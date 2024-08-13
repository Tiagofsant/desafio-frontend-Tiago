import { Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "100vh",
}));

export const StyledContent = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "280px",
}));
