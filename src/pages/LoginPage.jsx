import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/authThunk';
import { Form, Button, Input } from 'antd';
import { Container } from 'components/App/App.styled';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(store => store.auth.error);
  useEffect(() => {
    if (error) {
      toast.error(`Wrong email or password. Check data and try again.`);
    }
  }, [error]);

  const onFormSubmit = values => {
    // e.preventDefault();
    console.log(values);
    // const user = {
    //   email: e.target.elements.email.value,
    //   password: e.target.elements.password.value,
    // };
    dispatch(loginThunk(values));
    // e.target.reset();
  };
  return (
    <Container>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFormSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please, input your email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please, input your password' }]}
        >
          <Input.Password autoComplete="off" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" ghost htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

//   {/* <form onSubmit={onFormSubmit}>
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
// </div> */}
