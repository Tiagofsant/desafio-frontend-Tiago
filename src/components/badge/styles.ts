import { Stack, styled, Typography } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledContent = styled(Stack)(() => ({
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: "10px",
  width: "200px",
}));

export const StyledTypography = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
}));
