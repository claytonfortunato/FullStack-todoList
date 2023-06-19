import { LoginInput } from "../../components/LoginInput";
import * as C from "./styles";

export const Login = () => {
  return (
    <C.Container>
      <C.Header>ToDo List</C.Header>
      <LoginInput />
      <p>
        Você não tem conta? <a href="#">Sign up</a>
      </p>
    </C.Container>
  );
};
