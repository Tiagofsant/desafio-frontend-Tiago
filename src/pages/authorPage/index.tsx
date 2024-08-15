import { useCallback, useEffect, useState } from "react";
import {
  getCelebritiesById,
  getCelebritiesWorksByID,
} from "../../api/services/requests";
import AuthorDescription from "../../components/authorDescription";
import CustomDivider from "../../components/customDivider";
import LabeledBadge from "../../components/labeledBadge";
import MediaCard from "../../components/mediaCard";
import { PATH_IMAGE_API } from "../../routes/paths";
import { StyledContainer, StyledContent } from "./styles";

// ---------------------------------------------------------------------------------------

export default function AuthorPage() {
  const [authorData, setAuthorData] = useState<any>();
  const [authorWorks, setAuthorWorks] = useState<any[]>([]);

  const authorWorksContent = authorWorks.map((item: any) => ({
    title: item.title,
    score: item.vote_average,
    imageUrl: `${PATH_IMAGE_API.default}w185/${item.poster_path}`,
    director: "Desconhecido",
    year: "Desconhecido",
  }));

  const getAuthorWorks = useCallback(async () => {
    try {
      const data: any = await getCelebritiesWorksByID(553535);

      if (data) {
        setAuthorWorks(data.cast);
      }
    } catch (error) {
      return error;
    }
  }, []);

  const getAuthorData = useCallback(async () => {
    try {
      const data: any = await getCelebritiesById(553535);

      if (data) {
        setAuthorData(data);
      }
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    getAuthorData();
  }, [getAuthorData]);

  useEffect(() => {
    getAuthorWorks();
  }, [getAuthorWorks]);

  return (
    <StyledContainer>
      <StyledContent>
        <LabeledBadge title="Filmes e Séries" />

        <MediaCard content={authorWorksContent} />

        <CustomDivider />
      </StyledContent>

      {authorData && (
        <AuthorDescription
          authorName={authorData.name}
          born={authorData.birthday}
          origin={authorData.place_of_birth}
          about={authorData.biography}
          imageUrl={`${PATH_IMAGE_API.default}w500/${authorData.profile_path}`}
        />
      )}
    </StyledContainer>
  );
}
