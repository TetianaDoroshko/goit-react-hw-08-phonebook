import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authThunk';
import { Space, Button, Typography } from 'antd';

export const UserMenu = () => {
  const userEmail = useSelector(store => store.auth.user.email);
  const dispatch = useDispatch();

  return (
    <Space>
      <Typography.Text>{userEmail}</Typography.Text>
      <Button type="primary" ghost onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </Space>
  );
};
