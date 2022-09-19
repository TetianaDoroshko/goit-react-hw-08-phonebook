import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authThunk';
import { Nav, Navbar, Button } from 'react-bootstrap';

export const UserMenu = () => {
  const userEmail = useSelector(store => store.auth.user.email);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Navbar.Text>{userEmail}</Navbar.Text>
      <Button
        variant="outline-primary"
        type="button"
        onClick={() => dispatch(logoutThunk())}
        style={{ marginLeft: '10px' }}
      >
        Logout
      </Button>
    </Nav>
  );
};

// {
//   /* <div>
//   <p>{userEmail}</p>
//   <button type="button" onClick={() => dispatch(logoutThunk())}>
//     Logout
//   </button>
// </div>; */
// }
