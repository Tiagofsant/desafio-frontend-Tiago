import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMovieTrailerUrlById } from "../../api/services/requests";
import Iconify from "../iconify";

// -----------------------------------------------------------

export default function ButtonIcon() {
  const [trailerKey, setTrailerKey] = useState("");
  const trailerURL = `https://www.youtube.com/watch?v=${trailerKey}`;

  const getTrailer = async () => {
    try {
      const result: any = await getMovieTrailerUrlById(0);

      if (result) {
        setTrailerKey(result.results[0].key);
      }
    } catch (error) {
      alert("Trailer não encontrado.");
      setTrailerKey("");
      return error;
    }
  };

  return trailerKey !== "" ? (
    <Link
      to={trailerURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="contained"
        onClick={getTrailer}
        endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
      >
        Assistir ao trailer
      </Button>
    </Link>
  ) : (
    <Button
      variant="contained"
      onClick={getTrailer}
      endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
    >
      Assistir ao trailer
    </Button>
  );
}
