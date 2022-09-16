import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/authThunk';

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
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
