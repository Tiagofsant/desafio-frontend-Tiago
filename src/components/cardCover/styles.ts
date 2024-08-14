import { Card, CardContent, CardMedia, Stack, styled } from "@mui/material";

// ---------------------------------------------------------------------------

interface Props {
  imageUrl?: string;
}
// ---------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  position: "relative",
  borderRadius: "30px",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
}));

export const StyledCardMedia = styled(CardMedia)<Props>(({ imageUrl }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.4)",

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
  width: "70%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "30px",
  zIndex: 2,

  transformOrigin: "50% 50%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-30px)",
  },
}));
