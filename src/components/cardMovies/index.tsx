import { Stack, useTheme } from "@mui/material";
import React from "react";
import { CardMoviesProps } from "../../types";
import ButtonIcon from "../buttonIcon";
import ScoreBadge from "../scoreBadge";
import {
  StyledCard,
  StyledCardContents,
  StyledCardMedia,
  StyledContent,
  StyledTypography,
  StyledTypographyContainer,
} from "./styles";

// -----------------------------------------------------------------------------------

export default function CardMovies({ content }: CardMoviesProps) {
  const theme = useTheme();

  return (
    <>
      {content.map((data) => (
        <StyledCard>
          <StyledCardMedia imageUrl={data.imageUrl}>
            <StyledCardContents>
              {data.score !== undefined && <ScoreBadge score={data.score} />}
              <StyledContent spacing={1}>
                <StyledTypographyContainer>
                  <StyledTypography
                    variant="h4"
                    color={theme.palette.text.primary}
                  >
                    {data.title}
                  </StyledTypography>
                </StyledTypographyContainer>

                <Stack display="inline-block">
                  <ButtonIcon />
                </Stack>
              </StyledContent>
            </StyledCardContents>
          </StyledCardMedia>
        </StyledCard>
      ))}
    </>
  );
}
