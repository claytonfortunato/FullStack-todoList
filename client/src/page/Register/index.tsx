import { Link } from "react-router-dom";

import * as C from "./styles";

export const Register = () => {
  return (
    <C.Container>
      <C.Header>Register Account</C.Header>

      <C.ContainerForm>
        <C.Label>
          Name
          <C.Input type="text" placeholder="Digite seu nome" />
        </C.Label>

        <C.Label>
          Email
          <C.Input type="text" placeholder="Digite o seu email" />
        </C.Label>

        <C.Label>
          Password
          <C.Input type="text" placeholder="Digite sua senha" />
        </C.Label>

        <C.Label>
          Repeat Password
          <C.Input type="text" placeholder="Digite sua senha novamente" />
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
