import { Stack, Typography, useTheme } from "@mui/material";
import { StyledContainer } from "./styles";
import { ContentWrapperProps } from "../../types";

// ------------------------------------------------------------------

export default function ContentWrapper({ content }: ContentWrapperProps) {
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={1}>
      {content.map((data) => (
        <StyledContainer>
          <Typography
            variant="body2"
            gutterBottom
            color={theme.palette.text.secondary}
          >
            {data.label}
          </Typography>
        </StyledContainer>
      ))}
    </Stack>
  );
}
