import { Stack, styled, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";

// ----------------------------------------------------------------

export const StyledContent = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: "10px",
  width: "80px",
  gap: 10,
  padding: 5,
}));

// ----------------------------------------------------------------

export default function ScoreBadge() {
  const theme = useTheme();

  return (
    <StyledContent>
      <Iconify icon="noto:star" width="25px" />
      <Typography variant="h5" color={theme.palette.text.primary}>
        8.2
      </Typography>
    </StyledContent>
  );
}
