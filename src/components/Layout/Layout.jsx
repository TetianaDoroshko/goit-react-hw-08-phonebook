import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Layout } from 'antd';

export const AppLayout = () => {
  return (
    <Layout>
      <AppBar />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
