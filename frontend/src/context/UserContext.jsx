import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [isGuest, setIsGuest] = useState(false);

  const updateUser = (name) => {
    setUserName(name);
    setIsGuest(false); // Reset isGuest to false when a user is updated
  };

  const updateAvatar = (avatarSrc) => {
    setAvatar(avatarSrc);
  };

  const updateRollNo = (rollNo) => {
    setRollNo(rollNo);
  };

  const setGuest = () => {
    setIsGuest(true);
  };

  return (
    <UserContext.Provider value={{ userName, avatar, rollNo, isGuest, updateUser, updateAvatar, updateRollNo, setGuest }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
