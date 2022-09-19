import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;

  return (
    <Nav>
      {isLoggedIn ? (
        <NavItem to="/contacts">Contacts</NavItem>
      ) : (
        <>
          <Nav.Link href="/goit-react-hw-08-phonebook/register">
            Register
          </Nav.Link>
          <Nav.Link href="/goit-react-hw-08-phonebook/login">Log in</Nav.Link>
        </>
      )}
    </Nav>
  );
};

// {/* <div>
//       <nav>
//         {isLoggedIn ? (
//           <NavLink to="contacts">Contacts</NavLink>
//         ) : (
//           <>
//             <NavLink to="register">Register</NavLink>
//             <NavLink to="login">Login</NavLink>
//           </>
//         )}
//       </nav>
//     </div> */}
