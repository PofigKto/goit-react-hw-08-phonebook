// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import RegisterForm from '../../components/RegisterForm';
import {
  Container,
  Title,
  RegisterFormContainer,
  WellcomeContainer,
} from './RegisterView.styled';
// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function RegisterView() {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <Container>
      {/* <WellcomeContainer>
        <Title>Сторінка реєстрації користувача</Title>
        {/* <h1>Страница регистрации</h1> */}
      {/* </WellcomeContainer> */}

      <RegisterFormContainer>
        <WellcomeContainer>
          <Title>Сторінка реєстрації користувача</Title>
          {/* <h1>Страница регистрации</h1> */}
        </WellcomeContainer>
        <RegisterForm />
      </RegisterFormContainer>

      {/* <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          E-Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}

      {/* <button type="submit">Sing up</button> */}
      {/* </form> */}
    </Container>
  );
}
