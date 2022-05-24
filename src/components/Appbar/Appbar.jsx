import Navigation from '../Navigation';
import { Header } from './Appbar.styled.js';
import AuthNav from '../AuthNav';

export default function Appbar() {
  return (
    <Header>
      <Navigation />
      <AuthNav />
    </Header>
  );
}
