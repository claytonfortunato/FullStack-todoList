import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Eye from "../../assets/icons/eye.svg";
import EyeSlash from "../../assets/icons/eye-slash.svg";

import { useRegister } from "../../hook/useRegister";

import { api } from "../../services/api";
import { toast } from "react-hot-toast";
import { LoginProps } from "../../interfaces/types";

import * as C from "./styles";

export const Login = () => {
  const [hidden, setHidden] = useState(true);

  const [data, setData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { handleSubmit, errors, register } = useRegister();

  const loginUser = async () => {
    const { email, password } = data;
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/todo");
        toast.success("Login Successful");
      }
    } catch (error) {
      console.log(error);
    }
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
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {errors.email && (
            <C.InvalidError> {errors.email.message} </C.InvalidError>
          )}
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
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="hidden" onClick={() => setHidden(!hidden)}>
            {!hidden ? <img src={Eye} /> : <img src={EyeSlash} />}
          </div>
          {errors.password && (
            <C.InvalidError> {errors.password.message} </C.InvalidError>
          )}
        </div>
        <C.Button type="submit" onClick={loginUser}>
          Log In
        </C.Button>
      </C.ContainerForm>
      <C.Action>
        <p>Você não possui conta?</p>
        <Link to="/register">Sign up</Link>
      </C.Action>
    </C.Container>
  );
};
