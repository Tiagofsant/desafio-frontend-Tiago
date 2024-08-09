import { Stack, styled, Typography, useTheme } from "@mui/material";

// -------------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  width: "300px",
  display: "flex",
  flexDirection: "row",
  gap: 10,
  height: 40,
  margin: 10,
}));

export const StyledContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 10,
}));

export const StyledTypographyContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
}));

// -------------------------------------------------------------

interface Props {
  label: string;
}

// -------------------------------------------------------------

export default function LabeledBadge({ label }: Props) {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledContent width={5} />

      <StyledTypographyContainer>
        <Typography variant="h5" color={theme.palette.text.primary}>
          {label}
        </Typography>
      </StyledTypographyContainer>
    </StyledContainer>
  );
}
