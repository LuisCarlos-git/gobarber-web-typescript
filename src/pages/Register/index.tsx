import React from 'react';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, NewAccount } from './styles';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input
            icon={FiUser}
            name="name"
            type="name"
            placeholder="Digite seu nome"
          />
          <Input
            icon={FiMail}
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Digite seu password"
          />

          <Button>Cadastrar</Button>
        </form>

        <NewAccount to="/">
          <FiArrowLeft size={18} color="#ff9000" />
          Voltar ao login
        </NewAccount>
      </Content>
    </Container>
  );
};

export default Login;
