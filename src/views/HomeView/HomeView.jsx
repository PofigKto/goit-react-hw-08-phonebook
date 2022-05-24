import React from 'react';
import { Container, Title } from './HomeView.styled';

const HomeView = () => (
  <Container>
    <Title>
      {/* Wellcome!!! */}
      Доброго вечора, ми з України!
      <span role="img" aria-label="Иконка приветствия">
        {/* 💁‍♀️ */}
        💙💛
      </span>
    </Title>
  </Container>
);

export default HomeView;
