import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import Eye from "../../assets/icons/eye.svg";
import EyeSlash from "../../assets/icons/eye-slash.svg";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Register = () => {
  const [hidden, setHidden] = useState(true);

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
          {errors.name && (
            <C.InvalidError> {errors.name.message} </C.InvalidError>
          )}
        </div>

        <div className="contentRegister">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            value={data.email}
            onChange={handleEmail}
          />
          {errors.email && (
            <C.InvalidError> {errors.email.message} </C.InvalidError>
          )}
        </div>

        <div className="contentPass">
          <label>Senha</label>
          <input
            type={!hidden ? "text" : "password"}
            {...register("password")}
            value={data.password}
            onChange={handlePassword}
          />

          <div className="hidden" onClick={() => setHidden(!hidden)}>
            {!hidden ? <img src={Eye} /> : <img src={EyeSlash} />}
          </div>
          {errors.password && (
            <C.InvalidError> {errors.password.message} </C.InvalidError>
          )}
        </div>

        <div className="contentPass">
          <label>Senha novamente</label>
          <input
            type={!hidden ? "text" : "password"}
            {...register("confirmPassword")}
            value={data.confirmPassword}
            onChange={handleConfirmPassword}
          />
          <div className="hidden" onClick={() => setHidden(!hidden)}>
            {!hidden ? <img src={Eye} /> : <img src={EyeSlash} />}
          </div>
          {errors.confirmPassword && (
            <C.InvalidError> {errors.confirmPassword.message} </C.InvalidError>
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
