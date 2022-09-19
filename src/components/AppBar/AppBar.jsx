import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import logo from 'images/logo-96.png';
import { Navbar, Container } from 'react-bootstrap';
import { LogoLink } from 'components/App/App.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;
  return (
    <Navbar
      fixed="top"
      as="header"
      style={{
        backgroundColor: 'lightsteelblue',
        boxShadow: '0px 3px 4px -2px rgba(0, 0, 0, 0.7)',
      }}
    >
      <Container>
        <LogoLink href="/">
          <img
            alt="logo"
            src={logo}
            height="96"
            className="d-inline-block align-center"
          />{' '}
          Phonebook
        </LogoLink>
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
