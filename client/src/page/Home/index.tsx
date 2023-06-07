import { useState } from "react";
import { FilterInput } from "../../components/FilterInput";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import * as C from "./styles";

interface Item {
  id: number;
  name: string;
  done: boolean;
}

export const Home = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 1, name: "Comprar o pão na padaria", done: true },
  ]);

  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput />

      <FilterInput />

      {list.map((item, index) => (
        <Task key={index} item={item} />
      ))}
    </C.Container>
  );
};
