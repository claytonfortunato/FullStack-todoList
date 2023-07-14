import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Register = () => {
  const { setData, data, handleSubmit, registerUser, errors, register } =
    useRegister();

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
        <div className="contentRegister">
          <label>Nome</label>
          <input
            type="text"
            {...register("name")}
            value={data.name}
            onChange={handleName}
          />
          {errors.name && <span> {errors.name.message} </span>}
        </div>

        <div className="contentRegister">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            value={data.email}
            onChange={handleEmail}
          />
          {errors.email && <span> {errors.email.message} </span>}
        </div>

        <div className="contentRegister">
          <label>Senha</label>
          <input
            type="password"
            {...register("password")}
            value={data.password}
            onChange={handlePassword}
          />
          {errors.password && <span> {errors.password.message} </span>}
        </div>

        <div className="contentRegister">
          <label>Senha novamente</label>
          <input
            type="password"
            {...register("confirmPassword")}
            value={data.confirmPassword}
            onChange={handleConfirmPassword}
          />
          {errors.confirmPassword && (
            <span> {errors.confirmPassword.message} </span>
          )}
        </div>
        <C.Button type="submit">Register</C.Button>
      </C.ContainerForm>

      <C.Content>
        <p>Já possui conta?</p>
        <Link to="/">Log in</Link>
      </C.Content>
    </C.Container>
  );
};
