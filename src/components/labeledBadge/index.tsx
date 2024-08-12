import { Stack, styled, Typography, useTheme } from "@mui/material";

// -------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: 10,
  height: "100%",
  margin: 10,
}));

export const StyledContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 10,
}));

// -------------------------------------------------------------

interface Props {
  title: string;
  subtitle?: string;
}

// -------------------------------------------------------------

export default function LabeledBadge({ title, subtitle }: Props) {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledContent width={5} />

      <Stack style={{ display: "flex", flexWrap: "nowrap" }}>
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
