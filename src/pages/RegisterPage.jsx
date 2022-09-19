import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupThunk } from "redux/authThunk";
import { Form, Button, Card, Stack } from "react-bootstrap";
import { Block, ContainerContacts } from "components/App/App.styled";
import toast from "react-hot-toast";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.auth.error);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(signupThunk(newUser));
    e.target.reset();
  };

  useEffect(() => {
    if (error) {
      toast.error("Error happens. We couldn't sign up to you.");
    }
  }, [error]);

  return (
    <ContainerContacts fluid="md">
      <Block>
        <Card.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
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
            <Stack>
              <Button type="submit" variant="outline-primary">
                Sign up
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Block>
    </ContainerContacts>
  );
};

// {/* <div>
//       <form onSubmit={onFormSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" autoComplete="off" />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div> */}
