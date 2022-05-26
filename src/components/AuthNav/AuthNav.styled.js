import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const AuthNavLink = styled(NavLink)`
//   display: inline-block;
//   text-decoration: none;
//   padding: 12;
//   font-weight: 700;
//   color: #2a363b;
//   &.active {
//     color: '#E84A5F';
//   }
// `;

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  color: #2a363b;
  font-size: 22px;
  margin-right: 10px;
  border-radius: 10px;
  background: linear-gradient(lightyellow, lightblue);
  /* background: linear-gradient(lightblue, lightyellow); */
  box-shadow: 5px 5px 10px 1px #30ebfc;
  &.active {
    /* composes: link; */
    color: #2314f7;
  }
`;
