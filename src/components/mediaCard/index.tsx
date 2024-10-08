import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { StyledContentRow } from "../../global/styles";
import { MediaCardProps } from "../../types";
import ScoreBadge from "../scoreBadge";
import { StyledCard, StyledCardMedia } from "./styles";

// ------------------------------------------------------------------

export default function MediaCard({ content }: MediaCardProps) {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap">
      {content.map((data, index) => (
        <StyledContentRow key={index} width="400px" m={1}>
          <StyledCard>
            <StyledCardMedia imageUrl={data.imageUrl} />
          </StyledCard>

          <Stack spacing={1}>
            <Typography variant="h4" color={theme.palette.text.primary}>
              {data.title}
            </Typography>

            <ScoreBadge noBadge score={data.score} />

            <Typography variant="body1" color={theme.palette.text.disabled}>
              {data.director} <br /> {data.year}
            </Typography>
          </Stack>
        </StyledContentRow>
      ))}
    </Stack>
  );
}
