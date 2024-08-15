import { ScoreBadgeProps } from "../../types";
import Score from "../score";
import { StyledContent } from "./styles";

// ----------------------------------------------------------------

export default function ScoreBadge({ noBadge, score }: ScoreBadgeProps) {
  return (
    <StyledContent noBadge={noBadge}>
      <Score score={score} />
    </StyledContent>
  );
}
