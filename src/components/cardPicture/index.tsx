import { Stack, Typography, useTheme } from "@mui/material";
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledContent,
} from "./styles";

// -----------------------------------------------------------------------------------

interface Props {
  content: {
    personName: string;
    characterName?: string;
    imageUrl: string;
  }[];
}

// -----------------------------------------------------------------------------------

export default function CardPicture({ content }: Props) {
  const theme = useTheme();

  return (
    <>
      {content.map((data) => (
        <StyledCard>
          <StyledCardMedia imageUrl={data.imageUrl}>
            <StyledCardContent>
              <StyledContent spacing={1}>
                <Typography variant="h4" color={theme.palette.text.primary}>
                  {data.personName}
                </Typography>

                <Typography variant="body1" color={theme.palette.text.disabled}>
                  {data.characterName}
                </Typography>
              </StyledContent>
            </StyledCardContent>
          </StyledCardMedia>
        </StyledCard>
      ))}
    </>
  );
}
