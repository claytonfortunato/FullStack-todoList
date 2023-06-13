import { useState, KeyboardEvent, FormEvent } from "react";

import * as C from "./styles";

interface Props {
  addTask: (e: FormEvent) => void;
}

export const TaskInput = ({ addTask }: Props) => {
  const [description, setDescription] = useState("");

  return (
    <C.Container onSubmit={addTask}>
      <C.Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <C.ButtonInput>Adicionar</C.ButtonInput>
    </C.Container>
  );
};
