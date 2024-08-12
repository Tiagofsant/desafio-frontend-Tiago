import { Card, CardContent, CardMedia, Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  minWidth: "280px",
  position: "relative",
  borderRadius: "30px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  backgroundImage: `url(images/celebrities/zendaya.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: "100%",
  height: "100%",
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
}));

export const StyledContent = styled(Stack)(() => ({
  height: "100%",
  justifyContent: "flex-end",
}));
