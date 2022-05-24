import React from 'react';
import { Container, Title } from './HomeView.styled';

const HomeView = () => (
  <Container>
    <Title>
      Wellcome!!!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </Title>
  </Container>
);

export default HomeView;
