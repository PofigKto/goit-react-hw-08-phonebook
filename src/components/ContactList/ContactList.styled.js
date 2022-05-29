import styled from 'styled-components';
export const List = styled.ul`
  width: 600px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 0;
`;
export const ContactListItem = styled.li`
  display: flex;
  /* align-items: baseline; */
  align-items: center;
  justify-content: space-between;
`;

export const Contact = styled.p`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const ContactListName = styled.span`
  color: darkblue;
  display: flex;
`;

export const ContactListNumber = styled.span`
  color: darkcyan;
  display: flex;
`;

export const ContactListButton = styled.button`
  /* display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  /* padding: 5px; */
  /* margin-left: 30px; */
  /* color: rgb(19, 61, 248); */
  /* background-color: rgb(234, 255, 47); */
  /* border: 3px solid darkslateblue; */
  /* border-radius: 10px; */
  /* width: 112px; */
  height: 44px;
  /* border: 2px solid blue; */
  box-shadow: 5px 5px 10px 1px #30ebfc;
  /* background: linear-gradient(lightyellow, lightblue); */
  border-radius: 10px;
  border: none;
  /* margin-top: 21px; */
  /* font-family: Roboto; */
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 16px;
  transition: all 0.2s;
  /* text-transform: uppercase; */
  /* color: #2a363b; */
  color: blue;
  background-color: yellow;
  /* background-color: transparent; */
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
    /* width: 115px;
    height: 44px; */
    /* background: #fff; */
    /* border: 1px solid #ff6b01; */
    color: #30ebfc;
  }
  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    // opacity: 0;
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px 1px #30ebfc;
  }
`;
