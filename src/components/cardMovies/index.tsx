import { Button, Stack, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
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
              <Button
                variant="contained"
                endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
              >
                Assistir ao trailer
              </Button>
            </Stack>
          </StyledContent>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
