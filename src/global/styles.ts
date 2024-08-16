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

export const Animate = styled(Stack)(() => ({
  transformOrigin: "50% 50%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));
