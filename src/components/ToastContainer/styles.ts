import styled, { css } from 'styled-components';

interface ToastProps {
  type: string;
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;
export const Toast = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  display: flex;

  ${props =>
    props.type === 'info' &&
    css`
      background: #01a9db;
      color: #fff;
    `}

  ${props =>
    props.type === 'error' &&
    css`
      background: #c53030;
      color: #fff;
    `}

  ${props =>
    props.type === 'success' &&
    css`
      background: #58fa58;
      color: #fff;
    `}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 15px;
    right: 16px;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
