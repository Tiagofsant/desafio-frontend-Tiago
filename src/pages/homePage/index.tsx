import { Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getAllCelebrities, getAllMovies } from "../../api/services/requests";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import LabeledBadge from "../../components/labeledBadge";
import { StyledContainerCover, StyledContent } from "./styles";
import CardCover from "../../components/cardCover";

// -------------------------------------------------------------------

export default function Home() {
  const [movies, setMovies] = useState<any>([]);
  const [celebrities, setCelebrities] = useState<any>([]);

  const PATH: string = "https://image.tmdb.org/t/p/";

  const highlightsContent = movies.map((item: any) => ({
    score: item.vote_average,
    title: item.title,
    imageUrl: `${PATH}w500/${item.backdrop_path}`,
  }));

  const celebritiesContent = celebrities.map((item: any) => ({
    personName: item.name,
    imageUrl: `${PATH}w500/${item.profile_path}`,
  }));

  const coverContent = {
    title: movies[0]?.title || "",
    description: movies[0]?.overview || "",
    score: movies[0]?.score || 0,
    imageUrl: `${PATH}w1280/${movies[0]?.backdrop_path || ""}`,
  };

  const getMovies = useCallback(async () => {
    const result: any = await getAllMovies();

    if (result) {
      setMovies(result.results);
    }
  }, []);

  const getCelebrities = useCallback(async () => {
    const result: any = await getAllCelebrities();

    if (result) {
      setCelebrities(result.results);
    }
  }, []);

  useEffect(() => {
    getMovies();
    getCelebrities();
  }, [getMovies, getCelebrities]);

  return (
    <Stack>
      <StyledContainerCover>
        <CardCover content={coverContent} />

        <Stack gap={2}>
          <LabeledBadge title="Destaques Também" />
          <CardMovies content={highlightsContent.slice(1, 4)} />
        </Stack>
      </StyledContainerCover>
      {/* ----------------------------------------------------- */}
      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Recomendandos" />
        </Stack>
        <StyledContent>
          <CardMovies content={highlightsContent.slice(4)} />
        </StyledContent>
      </Stack>
      {/* ----------------------------------------------------- */}
      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Celebridades" />
        </Stack>
        <StyledContent>
          <CardPicture content={celebritiesContent} />
        </StyledContent>
      </Stack>
    </Stack>
  );
}
