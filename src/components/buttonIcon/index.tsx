import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieTrailerUrlById } from "../../api/services/requests";
import Iconify from "../iconify";

// -----------------------------------------------------------

export default function ButtonIcon() {
  const [trailerkey, setTrailerkey] = useState("");
  const trailerURL = `https://www.youtube.com/watch?v=${trailerkey}`;

  const getTrailer = useCallback(async () => {
    try {
      const result: any = await getMovieTrailerUrlById();

      if (result) {
        setTrailerkey(result.results[0].key);
        console.log("data MOVIES ", result.results[0].key);
      }
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getTrailer();
  }, [getTrailer]);

  return (
    <Link
      to={trailerURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="contained"
        endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
      >
        Assistir ao trailer
      </Button>
    </Link>
  );
}
