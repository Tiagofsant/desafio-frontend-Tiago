import { Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  getAllCelebrities,
  getAllMovies,
  getMoviesDetailsById,
} from "../../api/services/requests";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import LabeledBadge from "../../components/labeledBadge";
import { PATH_IMAGE_API } from "../../routes/paths";
import { StyledContainerCover, StyledContent } from "./styles";

// -------------------------------------------------------------------

export default function HomePage() {
  // -------------------------- STATES -----------------------------------------
  const [movies, setMovies] = useState<any[]>([]);
  const [celebrities, setCelebrities] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);

  // -------------------------- CONTENT -----------------------------------------

  const genresContent = genres.map((item: any) => ({
    label: item.name,
  }));

  const highlightsContent = movies.map((item: any) => ({
    score: item.vote_average,
    title: item.title,
    imageUrl: item.backdrop_path
      ? `${PATH_IMAGE_API.default}w500/${item.backdrop_path}`
      : "",
  }));

  const celebritiesContent = celebrities.map((item: any) => ({
    personName: item.name,
    imageUrl: item.profile_path
      ? `${PATH_IMAGE_API.default}w500/${item.profile_path}`
      : "",
  }));

  const coverContent = {
    title: movies[0]?.title || "",
    description: movies[0]?.overview || "",
    score: movies[0]?.vote_average || 0,
    voteCount: movies[0]?.vote_count || 0,
    imageUrl: movies[0]?.backdrop_path
      ? `${PATH_IMAGE_API.default}w1280/${movies[0].backdrop_path}`
      : "",
    genres:
      genresContent.map((genre: { label: any }) => genre.label).join(", ") ||
      "",
  };

  // -------------------------- CALLBACKS -----------------------------------------

  const getMovies = useCallback(async () => {
    try {
      const data: any = await getAllMovies();
      if (data && data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const getCelebrities = useCallback(async () => {
    try {
      const result: any = await getAllCelebrities();
      if (result && result.results) {
        setCelebrities(result.results);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const getMovieDetails = useCallback(async () => {
    try {
      const data: any = await getMoviesDetailsById();
      if (data) {
        setGenres(data.genres);
      }
    } catch (error) {
      return error;
    }
  }, []);

  // -------------------------- EFFECTS -----------------------------------------

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    getCelebrities();
  }, [getCelebrities]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  // -------------------------- RETURN -----------------------------------------

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
          <LabeledBadge title="Recomendados" />
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
