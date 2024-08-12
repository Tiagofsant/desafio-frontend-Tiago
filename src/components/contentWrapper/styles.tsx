import { Stack, styled } from "@mui/material";

// -----------------------------------------------------------------------

export const StyledContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  border: `4px solid ${theme.palette.background.paper}`,
  borderRadius: "30px",
  padding: "0px 10px",
  justifyContent: "center",
  alignItems: "center",
}));
