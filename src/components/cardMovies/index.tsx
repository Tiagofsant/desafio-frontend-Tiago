import { Stack, Typography, useTheme } from "@mui/material";
import ButtonIcon from "../buttonIcon";
import ScoreBadge from "../scoreBadge";
import {
  StyledCard,
  StyledCardContents,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// -----------------------------------------------------------------------------------

interface Props {
  content: {
    score?: number | undefined;
    title: string;
    imageUrl: string;
  }[];
}

// -----------------------------------------------------------------------------------

export default function CardMovies({ content }: Props) {
  const theme = useTheme();

  return (
    <>
      {content.map((data) => (
        <StyledCard>
          <StyledCardMedia imageUrl={data.imageUrl}>
            <StyledCardContents>
              {data.score !== undefined && <ScoreBadge score={data.score} />}
              <StyledContent spacing={1}>
                <Typography variant="h4" color={theme.palette.text.primary}>
                  {data.title}
                </Typography>

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
