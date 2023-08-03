import { FormEvent, useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/Auth/userContext";

import { v4 } from "uuid";

import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";
import { FilterTask } from "../../components/FilterTask";
import { Header } from "../../components/Header";

import { toast } from "react-hot-toast";

import { Item } from "../../interfaces/types";

import * as C from "./styles";

const getLocalStorage = () => {
  let data = localStorage.getItem("todos");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const TodoList = () => {
  const [list, setList] = useState<Item[]>(getLocalStorage());
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "toDo" | "complete">("all");
  const [toggleSubmit, setToogleSubmit] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const { user } = useContext(UserContext);
  console.log(user);

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
      setToogleSubmit(true);

      setIsEditItem(null);
      toast.success("Tarefa editada");
    } else {
      setList((prev: Item[]) => {
        const newTodos: Item[] = [
          {
            id: v4(),
            title: description,
            done: false,
          },
          ...prev,
        ];

        return newTodos;
      });
      toast.success("Tarefa adicionada!");
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <C.Container>
        <Header />

        {!!user && <h2>Hi {user.name}</h2>}
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
