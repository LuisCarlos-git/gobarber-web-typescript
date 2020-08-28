import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  width: 100%;
  color: #666;
  padding: 16px;

  display: flex;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}


  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;

    ::placeholder {
      color: #666;
    }
  }

  svg {
    margin-right: 15px;
  }

  + div {
    margin-top: 10px;
  }
`;

export const ErrorMessage = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    ::before {
      border-color: #c53030 transparent;
    }
  }
`;
