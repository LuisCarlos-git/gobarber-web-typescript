import React from 'react';
import { useTransition } from 'react-spring';

import { MessageProps } from '../../hooks/Toast';

import Toast from './Toast';
import { Container } from './styles';

interface ToastProps {
  messages: MessageProps[];
}

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: '0' },
      enter: { right: '-0', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    },
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toast messages={item} key={key} styles={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
