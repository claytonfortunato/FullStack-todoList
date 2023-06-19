import { Link } from "react-router-dom";

import * as C from "./styles";

export const Register = () => {
  return (
    <C.Container>
      <h1>Register Account</h1>
      <p>Já possui conta?</p>
      <Link to="/">Log in</Link>
    </C.Container>
  );
};
