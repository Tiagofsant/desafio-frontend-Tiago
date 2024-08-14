import { Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Iconify from "../../components/iconify";
import { PATH_SOCIAL } from "../../routes/paths";

// --------------------------------------------------------------------

export default function Footer() {
  const theme = useTheme();

  return (
    <Stack width="100%" height="auto" padding={3}>
      <Typography
        variant="h5"
        color={theme.palette.text.disabled}
        textAlign="center"
        gutterBottom
      >
        &copy; 2024 Rader. All rights reserved
      </Typography>

      <Typography
        variant="h5"
        color={theme.palette.text.disabled}
        textAlign="center"
      >
        Desenvolvido Por: Tiago Vesperin
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Link to={PATH_SOCIAL.whatsapp} target="_blank">
          <Iconify icon="logos:whatsapp-icon" />
        </Link>
        <Link to={PATH_SOCIAL.linkedin} target="_blank">
          <Iconify icon="skill-icons:linkedin" />
        </Link>
      </Stack>
    </Stack>
  );
}
