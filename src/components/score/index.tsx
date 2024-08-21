import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { ScoreProps } from "../../types";
import Iconify from "../iconify";

// ------------------------------------------------------------------

export default function Score({ score }: ScoreProps) {
  const theme = useTheme();

  const formattedScore = score !== undefined && score.toFixed(1);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Iconify icon="noto:star" />
      <Typography variant="h5" color={theme.palette.text.primary}>
        {formattedScore}
      </Typography>
    </Stack>
  );
}
