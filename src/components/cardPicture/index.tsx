import { Stack, Typography, useTheme } from "@mui/material";
import { StyledCard, StyledCardContent, StyledCardMedia } from "./styles";

// -----------------------------------------------------------------------------------

export default function CardPicture() {
  const theme = useTheme();

  return (
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
              justifyContent: "flex-end",
              margin: "30px 0px",
            }}
          >
            <Typography variant="h4" color={theme.palette.text.primary}>
              Zendaya
            </Typography>
          </Stack>
        </StyledCardContent>
      </StyledCardMedia>
    </StyledCard>
  );
}
