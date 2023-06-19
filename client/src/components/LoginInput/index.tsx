import * as C from "./styles";

export const LoginInput = () => {
  return (
    <C.Container>
      <C.Content>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Digite seu Email" />
      </C.Content>

      <C.Content>
        <label htmlFor="password">Senha</label>
        <input type="text" placeholder="Digite sua senha" />
      </C.Content>

      <C.Button>Log in</C.Button>
    </C.Container>
  );
};
