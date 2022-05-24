import { LinkElem } from './Navigation.styled.js';

const Navigation = () => (
  // якщо не писати всередині ретурн, то використовуемо круглі скобки, бо це те що повертає стрілочна функція.
  <nav>
    <LinkElem to="/">Home</LinkElem>
    {/* <LinkElem to="/contacts">Contacts</LinkElem> */}
  </nav>
);

export default Navigation;
