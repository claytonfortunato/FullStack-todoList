import { FormEvent, useContext, useState } from "react";

import { v4 } from "uuid";

import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import { FilterTask } from "../../components/FilterTask";
import { Logout } from "../../components/Logout";
import { toast } from "react-hot-toast";

import { Item } from "../../interfaces/Item";

import { UserContext } from "../../contexts/Auth/AuthProvider";

import * as C from "./styles";

export const TodoList = () => {
  const [list, setList] = useState<Item[]>([]);
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "toDo" | "complete">("all");
  const [toggleSubmit, setToogleSubmit] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const user = useContext(UserContext);

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

  const handleAddTask = (e: FormEvent) => {
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
      setToogleSubmit(true);

      setDescription("");

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
    }
    setDescription("");
    toast.success("Nova tarefa foi adicionada!");
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
        <C.Header>{!!user && <h2>Olá, </h2>}</C.Header>
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
