import { Stack } from "@mui/material";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";

// -------------------------------------------------------------

export default function Home() {
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

      <Stack style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <CardMovies />
        <CardMovies />
        <CardMovies />
      </Stack>
    </Stack>
  );
}
