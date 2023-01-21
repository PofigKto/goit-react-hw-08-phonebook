import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* width: auto; */
  /* width: 640px; */
  height: 100%;
  display: flex;

  background: linear-gradient(lightblue, lightyellow);
  padding: 60px;
`;
export const PhonebookContainer = styled.div`
  width: 70%;
  /* width: 640px; */
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  text-transform: uppercase;
  color: blue;
  /* background: linear-gradient(lightblue, lightyellow); */
  padding: 30px;
`;
export const Phonebook = styled.h1`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  color: blue;
  margin-bottom: 10px;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 700;
  color: blue;
  margin-bottom: 10px;
`;