import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(lightblue, lightyellow);
`;
export const LoginFormContainer = styled.div`
  min-width: 80vh;
  min-height: calc(80vh - 0px);
  height: 50%;
  padding: 30px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px 0px #30ebfc;
`;
