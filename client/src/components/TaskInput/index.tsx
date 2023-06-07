import { useState } from "react";

import * as C from "./styles";

export const TaskInput = () => {
  const [inputText, setInputText] = useState("");

  return (
    <C.Container>
      <C.Input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <C.ButtonInput>Adicionar</C.ButtonInput>
    </C.Container>
  );
};
