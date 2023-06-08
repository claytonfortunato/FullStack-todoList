import { useState, KeyboardEvent } from "react";

import * as C from "./styles";

interface Props {
  onEnter: (taskName: string) => void;
}

export const TaskInput = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleAddTask = (e: EventTarget) => {
    e.addEventListener;
    setInputText(inputText);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <C.Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <C.ButtonInput onClick={handleAddTask}>Adicionar</C.ButtonInput>
    </C.Container>
  );
};
