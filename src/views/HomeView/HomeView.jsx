import React from 'react';
import { Container, Title, Text } from './HomeView.styled';
import cat from './cat.jpg';
const HomeView = () => (
  <Container>
    <img
      src={cat}
      // src="../../views/HomeView/cat.jpg"
      alt="wellcome"
      width="282"
      height="282"
    />
    <Title>
      {/* Wellcome!!! */}
      {/* Доброго pанку, ми з України! */}
      <span role="img" aria-label="Иконка приветствия">
        {/* 💁‍♀️ */}
        💙💛
      </span>
    </Title>
    <Text>Раді вітати вас на нашому сайті.</Text>
    <Text>
      Для подальшого користування просимо вас увійти під своїм іменем.
    </Text>
    <Text>Якщо ви новий користувач - перейдіть на сторінку реєстрації.</Text>
  </Container>
);

export default HomeView;
