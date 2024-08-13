import { CircularProgress, Stack } from "@mui/material";
import Logo from "../logo";

// -------------------------------------------------------

export default function LoadingScreen() {
  return (
    <Stack
      spacing={5}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />

      <Logo />
    </Stack>
  );
}
