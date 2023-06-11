import { useState } from "react";

import { FilterInput } from "../../components/FilterInput";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

import { Item } from "../../interfaces/Item";

import * as C from "./styles";

export const Home = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleDeleteTask = (id: number) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput onEnter={handleAddTask} onClick={handleAddTask} />

      <FilterInput />

      {list.map((item, index) => (
        <Task key={index} item={item} deleteTask={handleDeleteTask} />
      ))}
    </C.Container>
  );
};
