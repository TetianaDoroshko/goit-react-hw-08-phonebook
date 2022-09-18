import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export const Navigation = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;

  return (
    <Nav>
      {isLoggedIn ? (
        <Nav.Link href="contacts">Contacts</Nav.Link>
      ) : (
        <>
          <Nav.Link href="register">Register</Nav.Link>
          <Nav.Link href="login">Log in</Nav.Link>
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
