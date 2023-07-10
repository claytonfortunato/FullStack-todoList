import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormProvider } from "react-hook-form";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Register = () => {
  const { loginForm, registerUser, data, setData } = useRegister();

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, confirmPassword: e.target.value });
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container>
        <C.Header>Register Account</C.Header>

        <C.ContainerForm
          noValidate
          onSubmit={loginForm.handleSubmit(registerUser)}
        >
          <Input
            label="Nome"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            error={loginForm.formState.errors.name?.message}
            value={data.name}
            handleChange={handleName}
          />
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            error={loginForm.formState.errors.email?.message}
            value={data.email}
            handleChange={handleEmail}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
            value={data.password}
            handleChange={handlePassword}
          />
          <Input
            label="Senha novamente"
            placeholder="Digite sua senha novamente"
            type="password"
            name="password2"
            error={loginForm.formState.errors.password?.message}
            value={data.confirmPassword}
            handleChange={handleConfirmPassword}
          />

          <C.Button type="submit">Register</C.Button>
        </C.ContainerForm>

        <C.Content>
          <p>Já possui conta?</p>
          <Link to="/">Log in</Link>
        </C.Content>
      </C.Container>
    </FormProvider>
  );
};
