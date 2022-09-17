import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <NavLink to="contacts">Contacts</NavLink>
        ) : (
          <>
            <NavLink to="register">Register</NavLink>
            <NavLink to="login">Login</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};