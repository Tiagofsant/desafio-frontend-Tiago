import { Card, CardContent, CardMedia, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  width: "600px",
  height: "400px",
  position: "relative",
  borderRadius: "30px",
  overflow: "hidden",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/covers/divertidamente.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 2,
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
}));
