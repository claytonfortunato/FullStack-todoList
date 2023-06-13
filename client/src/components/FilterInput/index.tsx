import { useState } from "react";

import * as C from "./styles";

interface Props {
  item: any;
  onClick: (filter: string) => void;
}

export const FilterInput = () => {
  return (
    <C.Container>
      <C.Filter>Todos</C.Filter>
      <C.Filter>Para fazer</C.Filter>
      <C.Filter onClick={() => setFilter("complete")}>Completos</C.Filter>
    </C.Container>
  );
};
