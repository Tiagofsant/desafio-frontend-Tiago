import { Stack, Typography, useTheme } from "@mui/material";
import { StyledContentRow } from "../../global";
import LabeledBadge from "../labeledBadge";
import Iconify from "../iconify";
import SmallCircle from "../smallCircle";

// --------------------------------------------------------------------

interface Props {
  content: {
    title: string;
    description: string;
    score: number;
    imageUrl: string;
  }[];
}

// --------------------------------------------------------------------

export default function movieDetails({ content }: Props) {
  const theme = useTheme();
  const colorPrimary = theme.palette.text.primary;
  const colorSecondary = theme.palette.text.secondary;
  const colorDisabled = theme.palette.text.disabled;

  return (
    <Stack>
      {content.map((data) => (
        <StyledContentRow mt={2}>
          <Stack width="60%">
            <StyledContentRow spacing={1} alignItems="center">
              <Typography variant="h1" color={colorPrimary}>
                {data.title}
              </Typography>

              <Iconify icon="noto:star" />
              <Typography variant="h5" color={colorPrimary}>
                {data.score}
              </Typography>

              <Typography variant="body1" color={colorDisabled}>
                | 120 mil
              </Typography>
            </StyledContentRow>

            <StyledContentRow alignItems="center">
              <Typography variant="body1" color={colorDisabled}>
                2h 8m <SmallCircle /> 18 <SmallCircle /> 2024
              </Typography>
            </StyledContentRow>

            <Typography variant="body1" color={colorSecondary} mt={4}>
              {data.description}
            </Typography>
          </Stack>

          <Stack>
            <LabeledBadge title="Direção" subtitle="Shawn Levy" />

            <LabeledBadge
              title="Roteiristas"
              subtitle="Ryan Reynoalds, Rhett Reese, Paul Wernick"
            />

            <LabeledBadge
              title="Artistas"
              subtitle="Ryan Reynoalds, hugh Jackman, Emma Corrin"
            />
          </Stack>
        </StyledContentRow>
      ))}
    </Stack>
  );
}
