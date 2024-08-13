import { styled, Card, CardMedia, Stack } from "@mui/material";

// ---------------------------------------------------------------------

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "350px",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  border: `5px solid ${theme.palette.background.paper}`,
  marginBottom: "30px",
  marginRight: "30px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/celebrities/zendaya.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledContainer = styled(Stack)(() => ({
  width: "600px",
  padding: "0px 10px",
}));
