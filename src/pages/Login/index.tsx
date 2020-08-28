import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

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
  const handleData = useCallback(async (data: object): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('E-mail é obrigatório'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleData}>
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
            placeholder="Digite seu password"
          />

          <Button>Login</Button>
          <ForgotPassword to="/">Esqueci minha senha</ForgotPassword>
        </Form>

        <NewAccount to="/register">
          <FiLogIn size={18} color="#ff9000" />
          Criar conta
        </NewAccount>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
