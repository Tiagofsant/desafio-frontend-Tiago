import { StyledContentRow } from "../../global";
import CustomDivider from "../customDivider";
import MediaCard from "../cardMedia";

// -----------------------------------------------------------

// -----------------------------------------------------------

export default function AuthorWorks() {
  return (
    <StyledContentRow flexWrap="wrap" gap={10}>
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
    </StyledContentRow>
  );
}
