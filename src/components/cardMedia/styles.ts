import { Card, CardMedia, Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: "320px",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100px",
  height: "150px",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  border: `4px solid ${theme.palette.background.paper}`,
  marginBottom: "30px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/covers/rivals.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
