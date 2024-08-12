import { Button } from "@mui/material";
import Iconify from "../iconify";

// -----------------------------------------------------------

export default function ButtonIcon() {
  return (
    <Button
      variant="contained"
      endIcon={<Iconify icon="raphael:arrowright" width="40px" />}
    >
      Assistir ao trailer
    </Button>
  );
}
