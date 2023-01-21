import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';
import { Container, Avatar, Name, LogOutButton } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const avatar = defaultAvatar;

  const handleButton = () => {
    dispatch(authOperations.fetchCurrentUser());
    console.log(authOperations.fetchCurrentUser());
    console.log(isLoggedIn);
    dispatch(authOperations.logOut());
  };
  return (
    <Container>
      <Avatar src={avatar} alt="" width="44" />
      <Name>Ласкаво просимо, Котику {name} </Name>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}></button> */}
      <LogOutButton type="button" onClick={handleButton}>
        {/* Log out */}
        Вихід тут
      </LogOutButton>
    </Container>
  );
}
