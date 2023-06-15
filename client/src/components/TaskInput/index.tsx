import { FormEvent } from "react";

import * as C from "./styles";

interface PropsInput {
  addTask: (e: FormEvent) => void;
  description: string;
  inputText: (e: string) => void;
}

export const TaskInput = ({ addTask, description, inputText }: PropsInput) => {
  return (
    <C.Container onSubmit={addTask}>
      <C.Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={description}
        onChange={(e) => inputText(e.target.value)}
      />
      <C.ButtonInput>Adicionar tarefa</C.ButtonInput>
    </C.Container>
  );
};
