import { useSelector } from 'react-redux';

export const GreetingPage = () => {
  const name = useSelector(store => store.auth.user.name);
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
};
