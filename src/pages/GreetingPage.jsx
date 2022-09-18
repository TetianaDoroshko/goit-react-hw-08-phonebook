import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

export const GreetingPage = () => {
  const name = useSelector(store => store.auth.user.name);
  return (
    <Container fluid="md">
      <h1>Hello, {name}</h1>
    </Container>
  );
};
