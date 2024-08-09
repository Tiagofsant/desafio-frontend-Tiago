import { Stack, Typography, useTheme } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import LabeledBadge from "../../components/labeledBadge";

// -------------------------------------------------------------

export default function Home() {
  const theme = useTheme();

  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: "100%",
        height: "100vh",
      }}
    >
      <CardCover />

      <Stack>
        <LabeledBadge label="Destaques Também" />

        <CardMovies />
        <CardMovies />
        <CardMovies />
      </Stack>
    </Stack>
  );
}
