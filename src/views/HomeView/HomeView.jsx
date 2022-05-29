import React from 'react';
import { Container, Title, Text } from './HomeView.styled';
import cat from './cat.jpg';
const HomeView = () => (
  <Container>
    <img
      src={cat}
      // src="../../views/HomeView/cat.jpg"
      alt="wellcome"
      // width="282"
      // height="282"
      width="30%"
      height="30%"
    />
    <Title>
      <span role="img" aria-label="Иконка приветствия">
        💙💛
      </span>
      Раді вітати вас на нашому сайті!
    </Title>
    {/* <Text>Раді вітати вас на нашому сайті!</Text> */}
    <Text>
      Для подальшого користування просимо вас увійти під своїм іменем.
    </Text>
    <Text>Якщо ви новий користувач - перейдіть на сторінку реєстрації.</Text>
  </Container>
);

export default HomeView;
