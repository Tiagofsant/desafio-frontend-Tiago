import { Card, CardMedia, Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

interface Props {
  imageUrl: string;
}

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "100px",
  height: "150px",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  border: `4px solid ${theme.palette.background.paper}`,
  marginBottom: "30px",
}));

export const StyledCardMedia = styled(CardMedia)<Props>(({ imageUrl }) => ({
  display: "flex",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
