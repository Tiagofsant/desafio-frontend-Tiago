import { Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import {
  getAllMoviesSimilar,
  getMovieCastById,
  getMoviesDetailsById,
} from "../../api/services/requests";
import ButtonIcon from "../../components/buttonIcon";
import CardMovies from "../../components/cardMovies";
import CardPicture from "../../components/cardPicture";
import ContentWrapper from "../../components/contentWrapper";
import LabeledBadge from "../../components/labeledBadge";
import MovieDetails from "../../components/movieDetails";
import { StyledContentRow } from "../../global";
import { PATH_IMAGE_API } from "../../routes/paths";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// ---------------------------------------------------------------------------

export default function MoviePage() {
  const [moviesSimilar, setMoviesSimilar] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<any>();
  const [genres, setGenres] = useState<any[]>([]);
  const [cast, setCast] = useState<any[]>([]);

  const imageUrl = movieDetails?.backdrop_path
    ? `${PATH_IMAGE_API.default}w1280/${movieDetails.backdrop_path}`
    : "";

  // ------------------------------- CONTENTS ------------------------------------

  const movieSimilarContent = moviesSimilar.map((item: any) => ({
    score: item.vote_average,
    title: item.title,
    imageUrl: item.backdrop_path
      ? `${PATH_IMAGE_API.default}w500/${item.backdrop_path}`
      : "",
  }));

  const genresContent = genres.map((item: any) => ({
    label: item.name,
  }));

  const castContent = cast.map((item: any) => ({
    personName: item.name,
    characterName: item.character,
    imageUrl: item.profile_path
      ? `${PATH_IMAGE_API.default}w500/${item.profile_path}`
      : "",
  }));

  // ------------------------------- CALLBACKS ------------------------------------

  const getMoviesSimilar = useCallback(async () => {
    try {
      const data: any = await getAllMoviesSimilar();
      if (data) {
        setMoviesSimilar(data.results);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const getMovieDetails = useCallback(async () => {
    try {
      const data: any = await getMoviesDetailsById();
      if (data) {
        setMovieDetails(data);
        setGenres(data.genres);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const getCast = useCallback(async () => {
    try {
      const data: any = await getMovieCastById();
      if (data) {
        setCast(data.cast);
      }
    } catch (error) {
      return error;
    }
  }, []);

  // ------------------------------- EFFECTS ------------------------------------

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  useEffect(() => {
    getCast();
  }, [getCast]);

  useEffect(() => {
    getMoviesSimilar();
  }, [getMoviesSimilar]);

  // ------------------------------- RETURNS ------------------------------------

  return (
    <Stack gap={2}>
      <StyledCard>
        <StyledCardMedia imageUrl={imageUrl}>
          <StyledCardContent>
            <StyledContent>
              <ButtonIcon />
            </StyledContent>
          </StyledCardContent>
        </StyledCardMedia>
      </StyledCard>

      <ContentWrapper content={genresContent} />

      <MovieDetails
        title={movieDetails?.title || ""}
        description={movieDetails?.overview || ""}
        score={movieDetails?.vote_average || 0}
        director={""}
        screenwriters={[]}
        artists={[]}
        voteCount={movieDetails?.vote_count || 0}
      />

      <LabeledBadge title="Elenco principal" />
      <StyledContentRow height={280}>
        <CardPicture content={castContent} />
      </StyledContentRow>

      <LabeledBadge title="Semelhantes" />
      <StyledContentRow height={280}>
        <CardMovies content={movieSimilarContent} />
      </StyledContentRow>
    </Stack>
  );
}
