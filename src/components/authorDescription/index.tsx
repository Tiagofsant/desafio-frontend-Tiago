import { Stack, Typography, useTheme } from "@mui/material";
import { StyledCard, StyledCardMedia, StyledContainer } from "./styles";

// ---------------------------------------------------------------------

interface Props {
  content: {
    authorName: string;
    born: string;
    origin: string;
    about: string;
  }[];
}

// ---------------------------------------------------------------------

export default function AuthorDescription({ content }: Props) {
  const theme = useTheme();

  return (
    <StyledContainer>
      {content.map((data) => (
        <Stack>
          <StyledCard>
            <StyledCardMedia />
          </StyledCard>

          <Typography
            variant="h3"
            gutterBottom
            color={theme.palette.text.primary}
          >
            {data.authorName}
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
              {data.born}
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
              {data.origin}
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
              {data.about}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </StyledContainer>
  );
}
