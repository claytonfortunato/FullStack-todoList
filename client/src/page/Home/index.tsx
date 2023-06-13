import { useState } from "react";

import { v4 } from "uuid";

import { FilterInput } from "../../components/FilterInput";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

import { Item } from "../../interfaces/Item";

import * as C from "./styles";

export const Home = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "toDo" | "complete">("all");

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: v4(),
      title: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleDeleteTask = (id: string) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filterAll = (filter: string) => {
    if (filter === "all") return list;
    if (filter === "toDo") {
      return list.filter((todo) => todo.done === false);
    }
    if (filter === "complete") {
      return list.filter((todo) => todo.done === false);
    }
  };

  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput onEnter={handleAddTask} onClick={handleAddTask} />

      <FilterInput />

      {list.length > 0 ? (
        filterAll(filter)?.map((index, item) => (
          <Task key={index} item={item} deleteTask={handleDeleteTask} />
        ))
      ) : (
        <p>Não há tarefas aqui!</p>
      )}
    </C.Container>
  );
};
