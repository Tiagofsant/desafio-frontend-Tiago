import { Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
import { StyledContent } from "./styles";

// ----------------------------------------------------------------

interface Props {
  noBadge?: boolean;
}

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
