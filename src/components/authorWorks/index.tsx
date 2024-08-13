import { StyledContentRow } from "../../global";
import CustomDivider from "../customDivider";
import MediaCard from "../mediaCard";

// -----------------------------------------------------------

const mediaContent = [
  {
    imageUrl:
      "https://itajaishopping.com.br/wp-content/uploads/2023/05/velozes-e-furiosos-10.jpg",
    title: "Velozes e Furiosos 2",
    score: 9.7,
    author: "Desconhecido",
    director: "Desconhecido",
    year: 2024,
  },
];

export default function AuthorWorks() {
  return (
    <StyledContentRow flexWrap="wrap" gap={10}>
      <MediaCard content={mediaContent} />

      <CustomDivider />
    </StyledContentRow>
  );
}
