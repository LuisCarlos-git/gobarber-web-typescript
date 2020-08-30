import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../../components/ToastContainer';

export interface MessageProps {
  id: string;
  message: string;
  title: string;
  type: 'error' | 'info' | 'success';
}

interface ToastData {
  addToast(message: Omit<MessageProps, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastData>({} as ToastData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const addToast = useCallback(
    ({ message, type, title }: Omit<MessageProps, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        message,
        title,
      };

      setMessages(oldMessage => [...oldMessage, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(oldState => oldState.filter(item => item.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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
