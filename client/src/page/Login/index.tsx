import { LoginInput } from "../../components/LoginInput";
import * as C from "./styles";

export const Login = () => {
  return (
    <C.Container>
      <C.Header>ToDo List</C.Header>
      <LoginInput />
    </C.Container>
  );
};
