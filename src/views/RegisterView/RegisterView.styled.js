import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  background: linear-gradient(lightblue, lightyellow);
`;
export const RegisterFormContainer = styled.div`
  /* position: relative; */
  width: 70%;
  min-height: calc(80vh - 0px);
  /* height: 50%; */
  /* padding: 30px; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
export const WellcomeContainer = styled.div`
  /* position: absolute; */
  top: 20px;
  left: 20px;
  width: calc(20vw - 0px);
  min-height: calc(50vh - 0px);
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(lightblue, lightyellow);
  /* background-color: lightblue; */
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
export const Title = styled.h1`
  font-weight: 500px;
  font-size: 48px;
  text-align: center;
  color: blue;
  margin-bottom: 30px;
`;
