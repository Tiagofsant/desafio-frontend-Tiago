import { Typography, useTheme } from "@mui/material";
import React from "react";
import { CardPictureProps } from "../../types";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// -----------------------------------------------------------------------------------

export default function CardPicture({ content }: CardPictureProps) {
  const theme = useTheme();

  return (
    <>
      {content.map((data) => (
        <StyledCard>
          <StyledCardMedia imageUrl={data.imageUrl}>
            <StyledCardContent>
              <StyledContent spacing={1}>
                <Typography variant="h4" color={theme.palette.text.primary}>
                  {data.personName}
                </Typography>

                <Typography variant="body1" color={theme.palette.text.disabled}>
                  {data.characterName}
                </Typography>
              </StyledContent>
            </StyledCardContent>
          </StyledCardMedia>
        </StyledCard>
      ))}
    </>
  );
}
