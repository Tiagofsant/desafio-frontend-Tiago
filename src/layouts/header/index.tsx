import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import Iconify from "../../components/iconify";

// ---------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      style={{
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack style={{ margin: "10px" }}>
        <img src="images/logo/logo.png" width="150px" />
      </Stack>

      <Stack>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Temporario
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="ion:search" color="#FFF" />
              </InputAdornment>
            }
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}
