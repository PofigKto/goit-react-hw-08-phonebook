import './LoginForm.styled.js';
import { Form, FormLabel, FormInput, FormButton } from './LoginForm.styled';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);

  const dispatch = useDispatch();

  const handleChange = event => {
    // console.log(event);
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
    // props.onSubmit({ email, password });
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Email :
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your email"
        />
      </FormLabel>
      <br />
      <FormLabel>
        Password :
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          // pattern="{ '9': '[0-9]', 'a': '[A-Za-z]', '*': '[A-Za-z0-9]' }"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // autocomplete
          maxlength="14"
          minlength="6"
          placeholder="Password must be min 6 and max 14 symbols"
        />
      </FormLabel>
      <FormButton type="submit">Log in</FormButton>
    </Form>
  );
}
// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
