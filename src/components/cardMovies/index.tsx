import { Stack, Typography, useTheme } from "@mui/material";
import ButtonIcon from "../buttonIcon";
import ScoreBadge from "../scoreBadge";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// -----------------------------------------------------------------------------------

interface Props {
  score?: boolean;
}

// -----------------------------------------------------------------------------------

export default function CardMovies({ score }: Props) {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardMedia>
        <StyledCardContent>
          {score && <ScoreBadge />}
          <StyledContent spacing={1}>
            <Typography variant="h4" color={theme.palette.text.primary}>
              Divertidamente 2
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
