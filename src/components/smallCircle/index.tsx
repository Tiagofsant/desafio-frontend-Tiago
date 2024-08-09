import { Stack, useTheme } from "@mui/material";

export default function SmallCircle() {
  const theme = useTheme();

  return (
    <Stack
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: theme.palette.text.disabled,
        display: "inline-block",
        margin: "0px 2px",
      }}
    />
  );
}
