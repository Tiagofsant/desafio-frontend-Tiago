import Score from "../score";
import { StyledContent } from "./styles";

// ----------------------------------------------------------------

interface Props {
  noBadge?: boolean;
  score: number;
}

// ----------------------------------------------------------------

export default function ScoreBadge({ noBadge, score }: Props) {
  return (
    <StyledContent noBadge={noBadge}>
      <Score score={score} />
    </StyledContent>
  );
}
