import { Stack, styled } from "@mui/material";

// -----------------------------------------------------------------------

interface Props {
  noBadge?: boolean;
}

// -----------------------------------------------------------------------

export const StyledContent = styled(Stack)<Props>(({ noBadge }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: noBadge ? undefined : "rgba(255, 255, 255, 0.2)",
  backdropFilter: noBadge ? undefined : "blur(10px)",
  borderRadius: noBadge ? undefined : "10px",
  width: "80px",
  gap: 10,
  padding: noBadge ? 0 : 5,
}));
