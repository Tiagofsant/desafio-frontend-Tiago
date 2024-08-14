import { Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledContent = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "280px",
}));

export const StyledContainerCover = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "100%",
  height: "100vh",
}));
