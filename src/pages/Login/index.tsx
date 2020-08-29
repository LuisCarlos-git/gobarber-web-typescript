import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';

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

interface DataProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();

  const handleData = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('E-mail é obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);
          formRef.current?.setErrors(error);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleData}>
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
