import './RegisterForm.styled';
import { Form, FormLabel, FormInput, FormButton } from './RegisterForm.styled';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export default function RegisterForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(name);
  console.log(email);
  console.log(password);

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        *Ім'я :{/* Name : */}
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Введіть своє ім'я"
        />
      </FormLabel>
      <br />
      <FormLabel>
        *Поштова скинька :{/* Email : */}
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          placeholder="name@example.com"
        />
      </FormLabel>
      <br />
      <FormLabel>
        *Секретний пароль :{/* Password : */}
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          pattern="{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }"
          required
          maxlength="14"
          minlength="6"
          placeholder="Пароль має містити не меньше 6 та не більше 14 символів"
        />
      </FormLabel>
      <FormButton type="submit">Зареєструватися</FormButton>
      {/* <FormButton type="submit">Sign up</FormButton> */}
    </Form>
  );
}
