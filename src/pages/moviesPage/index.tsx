import { Stack } from "@mui/material";
import React from "react";
import ButtonIcon from "../../components/buttonIcon";
import ContentWrapper from "../../components/contentWrapper";
import LabeledBadge from "../../components/labeledBadge";
import LoadingScreen from "../../components/LoadingScreen";
import MovieDetails from "../../components/movieDetails";
import SwipperPicture from "../../components/swipper/swiperPicture";
import SwipperMovie from "../../components/swipper/swipperMovie";
import { StyledContentRow } from "../../global/styles";
import useCast from "../../hooks/useCast";
import useMoviesDetais from "../../hooks/useMovieDetails";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import { PATH_IMAGE_API } from "../../routes/paths";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// ---------------------------------------------------------------------------

export default function MoviePage() {
  const { movieDetails, genres, loading, error } = useMoviesDetais(533535);
  const { similarMovies } = useSimilarMovies();
  const { cast } = useCast();

  const imageUrl = movieDetails?.backdrop_path
    ? `${PATH_IMAGE_API.default}w1280/${movieDetails.backdrop_path}`
    : "";

  // ---------------------TRATAMENTO DE ERROS --------------------------------

  if (loading) return <LoadingScreen />;
  if (error) return <div>ERRO AO CARREGAR A PAGINA</div>;

  // ------------------------------- CONTEÚDOS  ------------------------------

  const similarMoviesContent = similarMovies.map((item: any) => ({
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

  // ------------------------------- RETORNOS --------------------------------

  return (
    <Stack gap={2}>
      {/* ---------------------- SEÇÃO 1 -------------------------------- */}
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

      {/* ---------------------- SEÇÃO 2 -------------------------------- */}

      <MovieDetails
        title={movieDetails?.title || ""}
        description={movieDetails?.overview || ""}
        score={movieDetails?.vote_average || 0}
        director="Desconhecido"
        screenwriters={["Desconhecido"]}
        artists={["Desconhecido"]}
        voteCount={movieDetails?.vote_count || 0}
      />
      {/* ---------------------- SEÇÃO 3 -------------------------------- */}
      <LabeledBadge title="Elenco principal" />
      <StyledContentRow height={280}>
        <SwipperPicture itemsPic={castContent} />
      </StyledContentRow>

      {/* ---------------------- SEÇÃO 4 -------------------------------- */}
      <LabeledBadge title="Semelhantes" />
      <StyledContentRow height={280}>
        <SwipperMovie itemsMov={similarMoviesContent} />
      </StyledContentRow>
    </Stack>
  );
}
