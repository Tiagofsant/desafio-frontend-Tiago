import { Card, CardContent, CardMedia, Stack, styled } from "@mui/material";
import { imageProps } from "../../types";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  width: "280px",
  minWidth: "280px",
  height: "100%",
  position: "relative",
  borderRadius: "30px",
}));

export const StyledCardMedia = styled(CardMedia)<imageProps>(
  ({ imageUrl }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  })
);

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  padding: 0,
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.2)",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))`,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 1,
  },

  "&:hover::before": {
    opacity: 1,
  },
}));

export const StyledContent = styled(Stack)(() => ({
  height: "100%",
  justifyContent: "flex-end",
  position: "relative",
  zIndex: 2,
  padding: "0px 20px",
}));
