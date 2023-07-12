import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormProvider } from "react-hook-form";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Register = () => {
  const { setData, data, handleSubmit, registerUser, errors } = useRegister();

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
    <C.Container>
      <C.Header>Register Account</C.Header>

      <C.ContainerForm onSubmit={handleSubmit(registerUser)}>
        <Input
          label="Nome"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          value={data.name}
          handleChange={handleName}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          placeholder="Digite seu e-mail"
          name="email"
          error={errors.email?.message}
          value={data.email}
          handleChange={handleEmail}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          name="password"
          error={errors.password?.message}
          value={data.password}
          handleChange={handlePassword}
        />
        <Input
          label="Senha novamente"
          placeholder="Digite sua senha novamente"
          type="password"
          name="password2"
          error={errors.confirmPassword?.message}
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
  );
};
