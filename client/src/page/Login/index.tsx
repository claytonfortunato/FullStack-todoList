import { Link } from "react-router-dom";

import { LoginInput } from "../../components/LoginInput";

import * as C from "./styles";

export const Login = () => {
  return (
    <C.Container>
      <C.Header>ToDo List</C.Header>
      <LoginInput />
      <C.Action>
        <p>Você não possui conta?</p>
        <Link to="/register">Sign up</Link>
      </C.Action>
    </C.Container>
  );
};
