// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [rollNo, setRollNo] = useState('');

  const updateUser = (name) => {
    setUserName(name);
  };
  const updateAvatar = (avatarSrc) => {
    setAvatar(avatarSrc);
  };
  const updateRollNo = (rollNo) => {
    setRollNo(rollNo);
  }

  return (
    <UserContext.Provider value={{userName, avatar, updateUser, updateAvatar, rollNo,updateRollNo}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
