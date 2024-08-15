import { Stack, Typography, useTheme } from "@mui/material";
import Badge from "../badge";
import ButtonIcon from "../buttonIcon";
import Score from "../score";
import SmallCircle from "../smallCircle";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// Update Props to expect a single item
interface Props {
  content: {
    title: string;
    description: string;
    score: number;
    imageUrl: string;
    voteCount: number;
    genres: string | string[];
  };
}

export default function CardCover({ content }: Props) {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardMedia imageUrl={content.imageUrl}>
        <StyledCardContent>
          <StyledContent spacing={2}>
            <Badge />
            <Typography variant="h1" color={theme.palette.text.primary}>
              {content.title}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Score score={content.score} />
              <Typography variant="body1" color={theme.palette.text.disabled}>
                | {content.voteCount} <SmallCircle /> 2h 8m <SmallCircle />{" "}
                {content.genres} <SmallCircle /> 2024
              </Typography>
            </Stack>
            <Typography variant="body1" color={theme.palette.text.secondary}>
              {content.description}
            </Typography>
            <Stack display="inline-block">
              <ButtonIcon />
            </Stack>
          </StyledContent>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
