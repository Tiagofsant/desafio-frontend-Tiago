import { Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: 10,
  margin: 10,
}));

export const StyledContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 10,
}));
