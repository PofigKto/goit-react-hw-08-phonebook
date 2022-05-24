import React from 'react';
// import { NavLink } from 'react-router-dom';
import { AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <AuthNavLink to="/register">Register </AuthNavLink>
      <AuthNavLink to="/login">Log in</AuthNavLink>
    </div>
  );
}
