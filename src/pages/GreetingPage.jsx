import { useSelector } from 'react-redux';
import { ImageLink, Greeting, ContainerPage } from 'components/App/App.styled';
import logo from 'images/logo-256.png';

export const GreetingPage = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
  const name = useSelector(store => store.auth.user.name);
  return (
    <ContainerPage fluid="md">
      <Greeting>
        {isLoggedIn ? `Hello, ${name}` : 'Welcome to phone book'}
      </Greeting>
      <ImageLink to="/contacts">
        <img src={logo} alt="phonebook" />
      </ImageLink>
    </ContainerPage>
  );
};
