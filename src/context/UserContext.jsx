// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');

  const updateUser = (name) => {
    setUserName(name);
  };
  const updateAvatar = (avatarSrc) => {
    setAvatar(avatarSrc);
  };

  return (
    <UserContext.Provider value={{userName, avatar, updateUser, updateAvatar }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
