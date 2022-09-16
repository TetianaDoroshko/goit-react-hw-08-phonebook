import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <div>
      <Navigation />
      <UserMenu />
    </div>
  );
};
