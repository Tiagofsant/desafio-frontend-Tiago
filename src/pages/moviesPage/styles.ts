import { Card, CardContent, CardMedia, Stack, styled } from "@mui/material";

// --------------------------------------------------------------------------------------

export const StyledCard = styled(Card)(() => ({
  borderRadius: "30px",
  width: "100%",
  height: "500px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: "100%",
  backgroundImage: `url(/images/covers/deadpool.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: "100%",
  color: theme.palette.primary.main,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

export const StyledContent = styled(Stack)(() => ({
  display: "inline-block",
  height: "100%",
  alignContent: "flex-end",
  padding: "30px",
}));
