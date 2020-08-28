import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import background from '../../assets/sign-in-background.png';

const fade = keyframes`
  from {
    opacity: 0;
    transform: scale(0)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`;

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  max-width: 700px;
  width: 100%;

  animation: 500ms ${fade} ease-in-out;

  form {
    margin: 80px 0 50px;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    place-content: center;

    h1 {
      margin-bottom: 20px;
    }
  }
`;
export const Background = styled.section`
  flex: 1;
  background: url(${background}) no-repeat center;
`;

export const ForgotPassword = styled(Link)`
  color: #777;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #fff;
  }
`;
export const NewAccount = styled(Link)`
  display: flex;
  align-items: center;
  color: #ff9000;

  svg {
    margin-right: 5px;
  }
`;
