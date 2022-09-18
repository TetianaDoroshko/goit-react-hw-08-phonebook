import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authThunk';
import { Form, Button, Container } from 'react-bootstrap';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user));
    e.target.reset();
  };
  return (
    <Container fluid="md">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Enter password"
            autoComplete="off"
          />
        </Form.Group>

        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

// {/* <div>
//   <form onSubmit={onFormSubmit}>
//     <label>
//       Email:
//       <input type="email" name="email" />
//     </label>
//     <label>
//       Password:
//       <input type="password" name="password" autoComplete="off" />
//     </label>
//     <button type="submit">Log in</button>
//   </form>
// </div>; */}
