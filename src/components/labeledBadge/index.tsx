import { Stack, Typography, useTheme } from "@mui/material";
import { LabeledBadgeProps } from "../../types";
import { StyledContainer, StyledContent } from "./styles";

// -------------------------------------------------------------

export default function LabeledBadge({ title, subtitle }: LabeledBadgeProps) {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledContent width={5} />

      <Stack>
        <Typography variant="h5" color={theme.palette.text.primary}>
          {title}
        </Typography>

        <Typography variant="subtitle1" color={theme.palette.text.disabled}>
          {subtitle}
        </Typography>
      </Stack>
    </StyledContainer>
  );
}
