import { useDispatch } from "react-redux";
import { signupThunk } from "redux/authThunk";

export const RegisterPage = () => {
  const dispatch = useDispatch();

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
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
