import * as C from "./styles";

export const LoginInput = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Label htmlFor="email">Email</C.Label>
        <C.Input type="text" placeholder="Digite seu Email" />
      </C.Content>

      <C.Content>
        <C.Label htmlFor="password">Senha</C.Label>
        <C.Input type="text" placeholder="Digite sua senha" />
      </C.Content>

      <C.Button>Log in</C.Button>
    </C.Container>
  );
};
