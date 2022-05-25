import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Container, LoginFormContainer } from './LoginView.styled';

const LoginView = () => (
  <Container>
    <LoginFormContainer>
      <LoginForm />
    </LoginFormContainer>
  </Container>
);

export default LoginView;
