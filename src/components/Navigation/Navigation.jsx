import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Space } from 'antd';
import styled from 'styled-components';

export const Navigation = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;

  return (
    <Nav
      // inlineCollapsed={true}
      // selectedKeys={['contacts', 'signup', 'login']}
      style={{
        flex: '1 1 auto',
        // minWidth: 0,
        justifyContent: 'flex-end',
      }}
      mode="horizontal"
      items={
        isLoggedIn
          ? [
              {
                label: <NavLink to="contacts">Contacts</NavLink>,
                key: 'contacts',
              },
            ]
          : [
              {
                label: <NavLink to="register">Sign Up</NavLink>,
                key: 'signup',
              },
              {
                label: <NavLink to="login">Login</NavLink>,
                key: 'login',
              },
            ]
      }
    />
  );
};

export const Nav = styled(Menu)`
  flex: 1 1 auto;
  justify-content: flex-end;
  font-size: 22px;
  background-color: inherit;
  border: none;
`;

// export const Link = styled(NavLink)`
//   display: block;
//   height: 100px;
// `;
// {
/* {isLoggedIn ? (
        <Menu.Item key="contacts">
          <NavLink to="contacts">Contacts</NavLink>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item key="signup">
            <NavLink to="register">Sign Up</NavLink>
          </Menu.Item>
          <Menu.Item key="login">
            <NavLink to="login">Login</NavLink>
          </Menu.Item>
        </>
      )} */
// }

// <div>
//   <nav>
//     {isLoggedIn ? (
//       <NavLink to="contacts">Contacts</NavLink>
//     ) : (
//       <>
//         <NavLink to="register">Register</NavLink>
//         <NavLink to="login">Login</NavLink>
//       </>
//     )}
//   </nav>
// </div>

// (
//     <div>
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
//     </div>
//   );
