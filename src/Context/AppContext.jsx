"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  //LoginModal
  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  //ReviewModal
  return (
    <>
      <AppContext.Provider
        value={{
          isOpen,
          setIsOpen,
          handleOpenLoginModal,
          handleCloseModal,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
export const useAppContext = () => useContext(AppContext);
