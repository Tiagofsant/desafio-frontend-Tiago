import { Stack, styled, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";

// ----------------------------------------------------------------

interface Props {
  noBadge?: boolean;
}

// ----------------------------------------------------------------

export const StyledContent = styled(Stack)<Props>(({ noBadge }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: noBadge ? undefined : "rgba(255, 255, 255, 0.2)",
  backdropFilter: noBadge ? undefined : "blur(10px)",
  borderRadius: noBadge ? undefined : "10px",
  width: "80px",
  gap: 10,
  padding: noBadge ? 0 : 5,
}));

// ----------------------------------------------------------------

export default function ScoreBadge({ noBadge }: Props) {
  const theme = useTheme();

  return (
    <StyledContent noBadge={noBadge}>
      <Iconify icon="noto:star" width="25px" />
      <Typography variant="h5" color={theme.palette.text.primary}>
        8.2
      </Typography>
    </StyledContent>
  );
}
