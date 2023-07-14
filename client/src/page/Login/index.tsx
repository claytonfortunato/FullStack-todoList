import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Eye from "../../assets/icons/eye.svg";
import EyeSlash from "../../assets/icons/eye-slash.svg";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Login = () => {
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setData, data, handleSubmit, loginUser, errors, register } =
    useRegister();

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  return (
    <C.Container>
      <C.Header>ToDo List</C.Header>

      <C.ContainerForm onSubmit={handleSubmit(loginUser)}>
        <div className="contentLogin">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            value={data.email}
            onChange={handleEmail}
          />
          {errors.email && <span> {errors.email.message} </span>}
        </div>
        <div className="contentPass">
          <div className="contentLabel">
            <label>Senha</label>
            <p>Esqueceu a senha?</p>
          </div>
          <input
            type={!hidden ? "text" : "password"}
            {...register("password")}
            value={data.password}
            onChange={handlePassword}
          />

          <div className="hiden" onClick={() => setHidden(!hidden)}>
            {!hidden ? <img src={Eye} /> : <img src={EyeSlash} />}
          </div>
          {errors.password && <span> {errors.password.message} </span>}
        </div>
        <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
      </C.ContainerForm>
      <C.Action>
        <p>Você não possui conta?</p>
        <Link to="/register">Sign up</Link>
      </C.Action>
    </C.Container>
  );
};
