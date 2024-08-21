import { Stack } from "@mui/material";
import React from "react";
import CardCover from "../../components/cardCover";
import CardMovies from "../../components/cardMovies";
import LabeledBadge from "../../components/labeledBadge";
import LoadingScreen from "../../components/LoadingScreen";
import SwipperPicture from "../../components/swipper/swiperPicture";
import SwipperMovie from "../../components/swipper/swipperMovie";
import useCelebrites from "../../hooks/useAllCebelibries";
import useMoviesDetais from "../../hooks/useMovieDetails";
import useMovies from "../../hooks/useMovies";
import { PATH_IMAGE_API } from "../../routes/paths";
import { StyledContainerCover, StyledContent } from "./styles";

// -----------------------------------------------------------------------------

export default function HomePage() {
  const { movies, loading, error } = useMovies();
  const { celebrities } = useCelebrites();
  const { genres } = useMoviesDetais(533535);

  // -------------------------- TRATAMENTO DE ERROS  ---------------------------

  if (loading) return <LoadingScreen />;
  if (error) return <div>ERRO AO CARREGAR A PAGINA</div>;

  // -------------------------- CONTEÚDOS ---------------------------------------

  const genresContent = genres.map((item: any) => ({
    key: item.id,
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

  // -------------------------- RETORNO -------------------------------------------

  return (
    <Stack>
      {/* ---------------------- SEÇÃO 1 -------------------------------- */}
      <StyledContainerCover>
        <CardCover content={coverContent} />
        <Stack gap={2}>
          <LabeledBadge title="Destaques Também" />
          <CardMovies content={highlightsContent.slice(1, 4)} />
        </Stack>
      </StyledContainerCover>

      {/* ---------------------- SEÇÃO 3 -------------------------------- */}
      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Ultimos Lançamentos" />
        </Stack>
        <StyledContent>
          <SwipperMovie itemsMov={highlightsContent.slice(4)} />
        </StyledContent>
      </Stack>

      {/* ---------------------- SEÇÃO 2 -------------------------------- */}
      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Recomendados" />
        </Stack>
        <StyledContent>
          <SwipperMovie itemsMov={highlightsContent.slice(4)} />
        </StyledContent>
      </Stack>

      {/* ---------------------- SEÇÃO 3 -------------------------------- */}
      <Stack marginTop={2}>
        <Stack>
          <LabeledBadge title="Celebridades" />
        </Stack>
        <StyledContent>
          <SwipperPicture itemsPic={celebritiesContent} />
        </StyledContent>
      </Stack>
    </Stack>
  );
}
