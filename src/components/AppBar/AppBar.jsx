import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import logo from 'components/images/logo-96.png';
import { Navbar } from 'react-bootstrap';

export const AppBar = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;
  return (
    <Navbar as="header">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            height="96"
            className="d-inline-block align-center"
          />{' '}
          Phonebook
        </Navbar.Brand>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </Container>
    </Navbar>
  );
};

// <Container>
//   <header>
//     <div>Logo</div>
//     <Navigation />
//     {isLoggedIn && <UserMenu />}
//   </header>
// </Container>
