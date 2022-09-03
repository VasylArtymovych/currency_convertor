import { AppBar, Toolbar } from '@mui/material';
import { StyledNavLink } from './HeaderBar.styled';

function HeaderBar() {
  return (
    <AppBar
      sx={{ backgroundColor: 'black', boxShadow: ' 0 8px 6px -6px #363434;' }}
      position="static"
    >
      <Toolbar>
        <StyledNavLink to="/">CONVERTER</StyledNavLink>

        <StyledNavLink to="/rates">RATES</StyledNavLink>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;
