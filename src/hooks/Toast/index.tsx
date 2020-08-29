import React, { createContext, useContext, useCallback } from 'react';

import ToastContainer from '../../components/ToastContainer';

interface ToastData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastData>({} as ToastData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {}, []);
  const removeToast = useCallback(() => {}, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used with ToastContext');
  }

  return context;
}

export { useToast, ToastProvider };
