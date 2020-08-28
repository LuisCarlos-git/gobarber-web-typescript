import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});

const AuthProvider: React.FC = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('The hook useAuth must be used with AuthContext');
  }
};

export { AuthProvider, useAuth };
