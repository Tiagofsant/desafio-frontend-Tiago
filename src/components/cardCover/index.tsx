import { Stack, Typography, useTheme } from "@mui/material";
import Badge from "../badge";
import ButtonIcon from "../buttonIcon";
import Iconify from "../iconify";
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
              <Iconify icon="noto:star" />
              <Typography variant="h5" color={theme.palette.text.primary}>
                {content.score}
              </Typography>
              <Typography variant="body1" color={theme.palette.text.disabled}>
                | 120 mil <SmallCircle /> 2h 8m <SmallCircle /> Comedy, Action,
                Adventure, Superhero <SmallCircle /> 2024
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
