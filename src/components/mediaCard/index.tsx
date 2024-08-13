import { Stack, Typography, useTheme } from "@mui/material";
import { StyledContentRow } from "../../global";
import ScoreBadge from "../scoreBadge";
import { StyledCard, StyledCardMedia } from "./styles";

// ------------------------------------------------------------------

interface Props {
  content: {
    imageUrl: string;
    title: string;
    score: number;
    author: string;
    director: string;
    year: number;
  }[];
}

// ------------------------------------------------------------------

export default function MediaCard({ content }: Props) {
  const theme = useTheme();
  return (
    <Stack>
      {content.map((data) => (
        <StyledContentRow>
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
