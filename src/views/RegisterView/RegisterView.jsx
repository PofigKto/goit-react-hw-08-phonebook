import RegisterForm from '../../components/RegisterForm';
import {
  Container,
  Title,
  RegisterFormContainer,
  WellcomeContainer,
} from './RegisterView.styled';

export default function RegisterView() {
  return (
    <Container>
      <RegisterFormContainer>
        <WellcomeContainer>
          <Title>Сторінка реєстрації користувача</Title>
        </WellcomeContainer>
        <RegisterForm />
      </RegisterFormContainer>
    </Container>
  );
}
