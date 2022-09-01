import { AppBar, Toolbar } from "@mui/material";
import { StyledNavLink } from "./HeaderBar.styled";

function HeaderBar() {
  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <Toolbar>
        <StyledNavLink to="/">Converter</StyledNavLink>

        <StyledNavLink to="/rates">Rates</StyledNavLink>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
