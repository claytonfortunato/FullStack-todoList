import { useState } from "react";

import * as C from "./styles";

export const LoginInput = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.Content>
        <C.Label>
          Email
          <C.Input
            type="text"
            placeholder="Digite seu Email"
            onChange={handleChange}
          />
        </C.Label>
      </C.Content>

      <C.Content>
        <C.Label>
          Senha
          <C.Input
            type="password"
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
        </C.Label>
      </C.Content>

      <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
    </C.Container>
  );
};
