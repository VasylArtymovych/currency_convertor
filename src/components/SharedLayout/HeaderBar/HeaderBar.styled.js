import styled from "@emotion/styled";
import { theme } from "styles";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)({
  fontSize: " 22px",
  marginRight: "20px",
});

export const Container = styled.div`
  width: 100vw;
  padding: 20px 0;
  background: ${theme.colors.gray};
`;
