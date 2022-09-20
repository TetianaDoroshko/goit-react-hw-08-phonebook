import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

export const AppBar = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn) ?? false;
  return (
    <Layout.Header>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </Layout.Header>
  );
};
