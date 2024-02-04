// NavigationContext.js
import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("/smallestnumber");

  const paths = ["/smallestnumber", "/matchnumbers", "/fillintheblanks"];
  const totalPaths = paths.length;

  const handleNext = () => {
    const currentIndex = paths.indexOf(currentPath);
    const nextIndex = (currentIndex + 1) % totalPaths;
    setCurrentPath(paths[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = paths.indexOf(currentPath);
    const prevIndex = (currentIndex - 1 + totalPaths) % totalPaths;
    setCurrentPath(paths[prevIndex]);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, handleNext, handlePrev }}>
      {children}
    </NavigationContext.Provider>
  );
};
