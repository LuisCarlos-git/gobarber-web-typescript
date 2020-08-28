import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
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
          <Input
            icon={FiMail}
            name="email"
            type="email"
            placeholder="Digite seu E-mail"
          />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite seu E-mail"
          />

          <Button>Login</Button>
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
