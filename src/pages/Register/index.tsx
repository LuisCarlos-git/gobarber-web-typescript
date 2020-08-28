import React, { useCallback, useRef } from 'react';
import { FiUser, FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, NewAccount } from './styles';

import logo from '../../assets/logo.svg';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleRegisterUser = useCallback(async (data: object): Promise<
    void
  > => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigaório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('E-mail é obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const error = getValidationErrors(err);
      formRef.current?.setErrors(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleRegisterUser}>
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
        </Form>

        <NewAccount to="/">
          <FiArrowLeft size={18} color="#ff9000" />
          Voltar ao login
        </NewAccount>
      </Content>
    </Container>
  );
};

export default Login;
