import { Card, CardContent, CardMedia, styled } from "@mui/material";

// ---------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  position: "relative",
  borderRadius: "30px",
  width: "80%",
  height: "100vh",
  overflow: "hidden",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(images/covers/deadpool.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 2,
  color: theme.palette.primary.main,
  padding: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  gap: "20px",
}));
