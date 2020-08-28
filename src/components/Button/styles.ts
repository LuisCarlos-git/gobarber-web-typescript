import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 20px 0;

  background: #ff9000;
  border: 0;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  transition: background 0.3s ease-in-out;

  :hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
