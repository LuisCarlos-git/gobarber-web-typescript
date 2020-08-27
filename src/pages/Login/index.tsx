import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import {
  Container,
  Content,
  Background,
  ButtonSubmit,
  ForgotPassword,
  NewAccount,
} from './styles';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu login</h1>
          <input type="email" placeholder="Digite seu E-mail" />
          <input type="password" placeholder="Digite seu E-mail" />

          <ButtonSubmit type="submit">Login</ButtonSubmit>
          <ForgotPassword to="/">Esqueci minha senha</ForgotPassword>
        </form>

        <NewAccount to="/">
          <FiLogIn size={18} color="#ff9000" />
          Criar conta
        </NewAccount>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
