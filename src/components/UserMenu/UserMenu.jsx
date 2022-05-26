import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';
import { Container, Avatar, Name } from './UserMenu.styled';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="" width="44" />
      <Name>Ласкаво просимо, Котику {name} </Name>
      {/* <Name>Добро пожаловать, {name}</Name> */}
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        {/* Log out */}
        Вихід тут
      </button>
    </Container>
  );
}
