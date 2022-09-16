import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authThunk';

export const UserMenu = () => {
  const userEmail = useSelector(store => store.auth.user.email);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
