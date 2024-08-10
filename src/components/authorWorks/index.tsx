import { Stack, styled, useTheme } from "@mui/material";
import MediaCard from "../mediaCard";
import CustomDivider from "../customDivider";

// -----------------------------------------------------------

export const StyledContainer = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 30,
}));

// -----------------------------------------------------------

export default function AuthorWorks() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />

      <CustomDivider />
    </StyledContainer>
  );
}
