import { TaskInput } from "../../components/TaskInput";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput />
    </C.Container>
  );
};
