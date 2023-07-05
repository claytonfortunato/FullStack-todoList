import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import * as C from "./styles";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<RegisterProps>({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e: any) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Container>
      <C.Header>Register Account</C.Header>

      <C.ContainerForm onSubmit={registerUser}>
        <C.Label>
          Name
          <C.Input
            type="text"
            placeholder="Digite seu nome"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Email
          <C.Input
            type="text"
            placeholder="Digite o seu email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Password
          <C.Input
            type="password"
            placeholder="Digite sua senha"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Repeat Password
          <C.Input type="password" placeholder="Digite sua senha novamente" />
        </C.Label>

        <C.Button>Register</C.Button>
      </C.ContainerForm>

      <C.Content>
        <p>Já possui conta?</p>
        <Link to="/">Log in</Link>
      </C.Content>
    </C.Container>
  );
};
