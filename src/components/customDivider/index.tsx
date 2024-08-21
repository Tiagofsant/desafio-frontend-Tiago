import { Stack, useTheme } from "@mui/material";
import React from "react";

// ------------------------------------------------------

export default function CustomDivider() {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      height="5px"
      bgcolor={theme.palette.background.paper}
      borderRadius="30px"
    />
  );
}
