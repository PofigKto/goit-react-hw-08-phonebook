import React from 'react';
import LoginForm from '../../components/LoginForm';
import {
  Container,
  LoginFormContainer,
  ImgContainer,
} from './LoginView.styled';
// import WellcomeToUkraine from './WellcomeToUkraine.jpg';
const LoginView = () => (
  <Container>
    <LoginFormContainer>
      <ImgContainer>
        {/* <img
          src={WellcomeToUkraine}
          // src="../../views/HomeView/cat.jpg"
          alt="wellcome"
          // width="282"
          width="225"
          // height="50%"
          // height="282"
        /> */}
      </ImgContainer>
      <LoginForm />
    </LoginFormContainer>
  </Container>
);

export default LoginView;
