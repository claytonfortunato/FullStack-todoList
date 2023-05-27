import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput />

      <Task />
      <Task />
      <Task />
      <Task />
    </C.Container>
  );
};
