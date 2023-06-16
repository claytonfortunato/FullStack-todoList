import * as C from "./styles";

export const LoginInput = () => {
  return (
    <C.Container>
      <label htmlFor="login">login</label>
      <input type="text" />

      <label htmlFor="">Password</label>
      <input type="text" />

      <button>Log In</button>
    </C.Container>
  );
};
