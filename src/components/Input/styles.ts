import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666;

  display: flex;
  align-items: center;

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
