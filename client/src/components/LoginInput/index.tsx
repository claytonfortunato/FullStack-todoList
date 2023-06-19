import { Link } from "react-router-dom";

import * as C from "./styles";

export const LoginInput = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Label>
          Email
          <C.Input type="text" placeholder="Digite seu Email" />
        </C.Label>
      </C.Content>

      <C.Content>
        <C.Label>
          Senha
          <C.Input type="text" placeholder="Digite sua senha" />
        </C.Label>
      </C.Content>

      <Link to="/todo">
        <C.Button>Log in</C.Button>
      </Link>
    </C.Container>
  );
};
