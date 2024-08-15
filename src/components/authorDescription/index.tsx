import { Stack, Typography, useTheme } from "@mui/material";
import { StyledCard, StyledCardMedia, StyledContainer } from "./styles";

// ---------------------------------------------------------------------

interface Props {
  authorName: string;
  born: string;
  origin: string;
  about: string;
  imageUrl: string;
}

// ---------------------------------------------------------------------

export default function AuthorDescription({
  authorName,
  born,
  origin,
  about,
  imageUrl,
}: Props) {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Stack>
        <StyledCard>
          <StyledCardMedia imageUrl={imageUrl} />
        </StyledCard>

        <Typography
          variant="h3"
          gutterBottom
          color={theme.palette.text.primary}
        >
          {authorName}
        </Typography>

        <Stack>
          <Typography
            variant="subtitle2"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            Nascido (a) em:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            {born}
          </Typography>
        </Stack>

        <Stack>
          <Typography
            variant="subtitle2"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            Origem:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            {origin}
          </Typography>
        </Stack>

        <Stack>
          <Typography
            variant="subtitle2"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            Sobre:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color={theme.palette.text.disabled}
          >
            {about}
          </Typography>
        </Stack>
      </Stack>
    </StyledContainer>
  );
}
