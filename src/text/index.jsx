import { Typography } from "@mui/material";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function Text({ children, ...props }) {
  return <Typography {...props}>{children}</Typography>;
}

export default Text;
