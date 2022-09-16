import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
    </div>
  );
};
