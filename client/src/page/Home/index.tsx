import { useState } from "react";

import { v4 } from "uuid";

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
      id: v4(),
      title: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleDeleteTask = (id: string) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: string) => {
    setList(
      list.map((el) => (el.id === id ? { ...title, done: !title.done } : title))
    );
  };

  return (
    <C.Container>
      <C.Header>Lista de Tarefa</C.Header>

      <TaskInput onEnter={handleAddTask} onClick={handleAddTask} />

      <FilterInput />

      {list.length > 0 ? (
        list.map((item, index) => (
          <Task
            key={index}
            item={item}
            deleteTask={handleDeleteTask}
            taskDone={handleDone}
          />
        ))
      ) : (
        <p>Não há tarefas aqui!</p>
      )}
    </C.Container>
  );
};
