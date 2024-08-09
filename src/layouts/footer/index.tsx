import { Stack, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Stack width="100%" height="30px" padding={3}>
      <Typography
        variant="h5"
        color={theme.palette.text.disabled}
        textAlign="center"
      >
        &copy; 2024 Rader. All rights reserved
      </Typography>
    </Stack>
  );
}
