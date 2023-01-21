import './LoginForm.styled.js';
import { Form, FormLabel, FormInput, FormButton } from './LoginForm.styled';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Поштова скринька :{/* Email : */}
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="Введіть своє ім'я"
        />
      </FormLabel>
      <br />
      <FormLabel>
        Секретний пароль :{/* Password : */}
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          maxlength="14"
          minlength="6"
          placeholder="Пароль має містити не меньше 6 та не більше 14 символів"
        />
      </FormLabel>
      <FormButton type="submit">Заходьте, будь-ласка!</FormButton>
    </Form>
  );
}
