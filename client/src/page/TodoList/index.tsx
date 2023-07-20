import { FormEvent, useState } from "react";

import { v4 } from "uuid";

import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import { FilterTask } from "../../components/FilterTask";

import { toast } from "react-hot-toast";

import { Item } from "../../interfaces/types";

import * as C from "./styles";
import { Header } from "../../components/Header";

export const TodoList = () => {
  const [list, setList] = useState<Item[]>([]);
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "toDo" | "complete">("all");
  const [toggleSubmit, setToogleSubmit] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const handleTodo = (id: string) => {
    setList((prev) => {
      const newValue = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

      return newValue;
    });
  };

  const editTask = (id: string) => {
    let newEditItem = list.find((el) => {
      return el.id === id;
    });

    setToogleSubmit(false);

    setDescription(newEditItem?.title);

    setIsEditItem(id);
  };

  const handleRemoveAll = () => {
    setList([]);
    toast.success("Removeu todas as tarefas!");
  };

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault();

    if (!description) {
      toast.error("Favor preencher o descrição!");
    } else if (description && !toggleSubmit) {
      setList(
        list.map((el) => {
          if (el.id === isEditItem) {
            return { ...el, title: description };
          }
          return el;
        })
      );
      toast.success("Tarefa adicionada!");
      setToogleSubmit(true);

      setIsEditItem(null);
    } else {
      setList((prev) => [
        ...prev,
        {
          id: v4(),
          title: description,
          done: false,
        },
      ]);
      localStorage.setItem("todo", JSON.stringify(list));
    }
    setDescription("");
  };

  const handleDeleteTask = (id: string) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
    toast.success("Tarefa deletada");
  };

  const filterAll = (filter: string) => {
    if (filter === "all") return list;
    if (filter === "toDo") return list.filter((todo) => todo.done === false);

    if (filter === "complete") return list.filter((todo) => todo.done === true);
  };

  return (
    <>
      <C.Container>
        <Header />
        <C.Header>O que você tem que fazer hoje?</C.Header>
        <C.Wrapper>
          <TaskInput
            addTask={handleAddTask}
            description={description}
            inputText={setDescription}
            toggle={toggleSubmit}
          />
        </C.Wrapper>

        <FilterTask
          filter={filter}
          selectFilter={setFilter}
          removeAll={handleRemoveAll}
        />
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
                edit={editTask}
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
