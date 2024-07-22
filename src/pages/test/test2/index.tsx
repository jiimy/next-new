import { UserDisplay, UserProvider, UserUpdate } from '../index';

const index = () => {
  return (
    <div>
      <UserProvider>
        <UserDisplay />
        <UserUpdate />
      </UserProvider>
    </div>
  );
};

export default index;