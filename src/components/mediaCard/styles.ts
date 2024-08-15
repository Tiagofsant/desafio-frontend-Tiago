import { Card, CardMedia, styled } from "@mui/material";
import { imageProps } from "../../types";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: "140px",
  width: "140px",
  height: "200px",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  border: `4px solid ${theme.palette.background.paper}`,
  marginBottom: "30px",
}));

export const StyledCardMedia = styled(CardMedia)<imageProps>(
  ({ imageUrl }) => ({
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
  })
);
