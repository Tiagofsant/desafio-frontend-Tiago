import { Stack, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";

interface Props {
  score: number;
}

export default function Score({ score }: Props) {
  const theme = useTheme();
  const formattedScore = score.toFixed(1);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Iconify icon="noto:star" />
      <Typography variant="h5" color={theme.palette.text.primary}>
        {formattedScore}
      </Typography>
    </Stack>
  );
}
