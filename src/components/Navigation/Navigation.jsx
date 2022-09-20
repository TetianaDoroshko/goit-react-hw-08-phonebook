import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

export const Navigation = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;

  return (
    <Menu
      mode="horizontal"
      inlineCollapsed={false}
      defaultSelectedKeys={['contacts', 'signup', 'login']}
    >
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
      {/* {isLoggedIn ? (
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
      )} */}
    </Menu>
  );
};

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
