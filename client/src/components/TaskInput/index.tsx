import { useState, useEffect } from "react";

import * as C from "./styles";

export const TaskInput = () => {
  const [task, setTask] = useState();

  return (
    <C.Container>
      <C.Input type="text" />
      <C.ButtonInput>Adicionar</C.ButtonInput>
    </C.Container>
  );
};
