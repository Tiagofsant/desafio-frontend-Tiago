import { Stack, useTheme } from "@mui/material";

// ------------------------------------------------------

export default function CustomDivider() {
  const theme = useTheme();

  return (
    <Stack
      style={{
        width: "100%",
        height: "5px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "30px",
      }}
    />
  );
}
