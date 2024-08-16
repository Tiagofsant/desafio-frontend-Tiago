import AuthorDescription from "../../components/authorDescription";
import CustomDivider from "../../components/customDivider";
import LabeledBadge from "../../components/labeledBadge";
import LoadingScreen from "../../components/LoadingScreen";
import MediaCard from "../../components/mediaCard";
import useCelebrity from "../../hooks/useCelebrity";
import useCelebrityWorks from "../../hooks/useCelebrityWorks";
import { PATH_IMAGE_API } from "../../routes/paths";
import { StyledContainer, StyledContent } from "./styles";

// ---------------------------------------------------------------------------------------

export default function AuthorPage() {
  const { celebrity, loading, error } = useCelebrity(64);
  const { celebrityWorks } = useCelebrityWorks(64);

  // -------------------------- TRATAMENTO DE ERROS  ---------------------------

  if (loading) return <LoadingScreen />;
  if (error) return <div>ERRO AO CARREGAR A PAGINA</div>;

  // -------------------------- CONTEÚDOS ---------------------------------------

  const authorWorksContent = celebrityWorks.map((item: any) => ({
    title: item.title,
    score: item.vote_average,
    imageUrl: `${PATH_IMAGE_API.default}w185/${item.poster_path}`,
    director: "Desconhecido",
    year: "Desconhecido",
  }));

  // -------------------------- RETORNO -------------------------------------------

  return (
    <StyledContainer>
      {/* ---------------------- SEÇÃO 1 -------------------------------- */}
      <StyledContent>
        <LabeledBadge title="Filmes e Séries" />
        <MediaCard content={authorWorksContent.slice(0, 18)} />
        <CustomDivider />
      </StyledContent>

      {/* ---------------------- SEÇÃO 2 -------------------------------- */}
      {celebrity && (
        <AuthorDescription
          authorName={celebrity.name}
          born={celebrity.birthday}
          origin={celebrity.place_of_birth}
          about={celebrity.biography}
          imageUrl={`${PATH_IMAGE_API.default}w500/${celebrity.profile_path}`}
        />
      )}
    </StyledContainer>
  );
}
