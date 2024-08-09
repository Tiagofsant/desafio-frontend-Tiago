import { Button, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia
} from "./styles";

// -----------------------------------------------------------------------------------

export default function CardMovies() {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardMedia>
        <StyledCardContent>
          <Typography variant="h4" color={theme.palette.text.primary}>
            Divertidamente 2
          </Typography>

          <Button
            variant="contained"
            endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
          >
            Assistir ao trailer
          </Button>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
