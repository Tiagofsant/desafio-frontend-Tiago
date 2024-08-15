import { Stack, Typography, useTheme } from "@mui/material";
import { StyledContentRow } from "../../global";
import LabeledBadge from "../labeledBadge";
import Score from "../score";
import SmallCircle from "../smallCircle";

// --------------------------------------------------------------------

interface Props {
  title: string;
  description: string;
  score: number;
  director: string;
  screenwriters: string[];
  artists: string[];
  voteCount: number;
}

// --------------------------------------------------------------------

export default function movieDetails({
  title,
  description,
  score,
  director,
  screenwriters,
  artists,
  voteCount,
}: Props) {
  const theme = useTheme();
  const colorPrimary = theme.palette.text.primary;
  const colorSecondary = theme.palette.text.secondary;
  const colorDisabled = theme.palette.text.disabled;

  return (
    <Stack>
      <StyledContentRow mt={2}>
        <Stack width="60%">
          <StyledContentRow spacing={1} alignItems="center">
            <Typography variant="h1" color={colorPrimary}>
              {title}
            </Typography>

            <Score score={score} />

            <Typography variant="body1" color={colorDisabled}>
              {voteCount}
            </Typography>
          </StyledContentRow>

          <StyledContentRow alignItems="center">
            <Typography variant="body1" color={colorDisabled}>
              2h 8m <SmallCircle /> 18 <SmallCircle /> 2024
            </Typography>
          </StyledContentRow>

          <Typography variant="body1" color={colorSecondary} mt={4}>
            {description}
          </Typography>
        </Stack>

        <Stack>
          <LabeledBadge title="Direção" subtitle={director} />

          <LabeledBadge title="Roteiristas" subtitle={screenwriters} />

          <LabeledBadge title="Artistas" subtitle={artists} />
        </Stack>
      </StyledContentRow>
    </Stack>
  );
}
