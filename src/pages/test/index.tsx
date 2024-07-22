'use client';
import StyledButton from '@/components/button/StyledButton';
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import s from './test.module.scss';
import { DropDown } from 'snow-white-ui';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>('John Doe');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// 
export const UserDisplay = () => {
  const { name } = useUser();

  return <div>User Name: {name}</div>;
};

// 
export const UserUpdate = () => {
  const { setName } = useUser();
  const [newName, setNewName] = useState('');

  const updateName = () => {
    setName(newName);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};

const index = () => {
  return (
    <div>
      <StyledButton size='small'>버튼</StyledButton>
      <StyledButton className={s.test_btn}>버튼</StyledButton>
      <StyledButton>버튼</StyledButton>
    </div>
  );
};

export default index;