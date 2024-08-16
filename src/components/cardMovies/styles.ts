import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { imageProps } from "../../types";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  minWidth: "380px",
  height: "100%",
  position: "relative",
  borderRadius: "30px",
  overflow: "hidden",
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

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 2,
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const StyledCardContents = styled(CardContent)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: 2,
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.3)",

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
}));

export const StyledTypographyContainer = styled(Stack)(() => ({
  width: "100%",
  height: "100px",
  alignSelf: "flex-end",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

export const StyledTypography = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
