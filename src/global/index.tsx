import { Stack, styled } from "@mui/material";

// ------------------------------------------------------------------

export const StyledContentRow = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
}));

export const SmallCircle = styled(Stack)(({ theme }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: theme.palette.text.disabled,
  display: "inline-block",
  margin: "0 2px",
}));
