import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  margin-right: 20px;

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    position: relative;
    top: 18px;
  }
`;
