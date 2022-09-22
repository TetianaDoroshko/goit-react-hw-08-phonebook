import { useSelector } from 'react-redux';
import logoLg from 'images/phone-book (3).png';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

export const GreetingPage = () => {
  const name = useSelector(store => store.auth.user.name);
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
  return isLoggedIn ? (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  ) : (
    <>
      <h1>Welcome to Phonebook</h1>
      <Link to="contacts">
        <Image src={logoLg} preview={false} />
      </Link>
    </>
  );
};
