import { Button, Stack, Typography, useTheme } from "@mui/material";
import Iconify from "../iconify";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styles";

// -----------------------------------------------------------------------------------

export default function CardMovies() {
  const theme = useTheme();

  return (
    <>
      <StyledCard>
        <StyledCardMedia>
          <StyledCardContent>
            <Stack
              id="content"
              spacing={1}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-end", // Alinha verticalmente ao final
                margin: "40px 20px",
              }}
            >
              <Typography variant="h3" color={theme.palette.text.primary}>
                Divertidamente 2
              </Typography>

              <Button
                variant="contained"
                endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
                sx={{ width: "260px" }}
              >
                Assistir ao trailer
              </Button>
            </Stack>
          </StyledCardContent>
        </StyledCardMedia>
      </StyledCard>
    </>
  );
}
