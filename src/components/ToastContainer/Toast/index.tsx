import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { MessageProps, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface ToastProps {
  messages: MessageProps;
  styles: object;
}
const Toast: React.FC<ToastProps> = ({ messages, styles }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      removeToast(messages.id);
    }, 3000);

    return () => {
      clearTimeout();
    };
  }, [messages.id, removeToast]);

  return (
    <Container type={messages.type} style={styles}>
      <FiAlertCircle />

      <div>
        <strong>{messages.title}</strong>
        <p>{messages.message}</p>
      </div>

      <button onClick={() => removeToast(messages.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
