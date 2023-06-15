import { FormEvent, useState } from "react";

import { v4 } from "uuid";

import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

import { Item } from "../../interfaces/Item";

import * as C from "./styles";
import { FilterTask } from "../../components/FilterTask";

export const Home = () => {
  const [list, setList] = useState<Item[]>([]);
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "toDo" | "complete">("all");

  const handleTodo = (id: string) => {
    setList((prev) => {
      const novoValor = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      return novoValor;
    });
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (!description) return alert("Favor preencher a descrição!");

    setList((prev) => [
      ...prev,
      {
        id: v4(),
        title: description,
        done: false,
      },
    ]);

    setDescription("");
  };

  const handleDeleteTask = (id: string) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filterAll = (filter: string) => {
    if (filter === "all") return list;
    if (filter === "toDo") return list.filter((todo) => todo.done === false);

    if (filter === "complete") return list.filter((todo) => todo.done === true);
  };

  return (
    <>
      <C.Container>
        <C.Header>Todo List APP</C.Header>
        <C.Wrapper>
          <TaskInput
            addTask={handleAddTask}
            description={description}
            inputText={setDescription}
          />
        </C.Wrapper>

        <FilterTask filter={filter} selectFilter={setFilter} />
        <C.Content>
          <C.Header>Lista de Tarefa</C.Header>

          {list.length ? (
            filterAll(filter)?.map(({ id, title, done }) => (
              <Task
                key={id}
                id={id}
                description={title}
                done={done}
                handleTodo={handleTodo}
                deleteTask={handleDeleteTask}
              />
            ))
          ) : (
            <p>Nenhuma tarefa adicionada</p>
          )}
        </C.Content>
      </C.Container>
    </>
  );
};
