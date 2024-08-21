import React from "react";
import Iconify from "../iconify";
import { StyledContent, StyledTypography } from "./styles";

// ----------------------------------------------------------

export default function Badge() {
  return (
    <StyledContent>
      <StyledTypography variant="h6">
        <Iconify icon="mdi:hot" width="30px" />
        Em Destaque
      </StyledTypography>
    </StyledContent>
  );
}
