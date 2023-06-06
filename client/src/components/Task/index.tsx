import { useState } from "react";

import Check from "../../assets/icons/check.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import * as C from "./styles";

interface TaskProps {
  id: number;
  name: string;
  done: boolean;
}

export const Task = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description checked={isChecked} done={isChecked}>
          Teste1
        </C.Description>
      </C.Wrapper>
      <C.Content>
        <C.IconImage
          src={Check}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <C.IconImage src={Edit} />
        <C.IconImage src={Delete} />
      </C.Content>
    </C.Container>
  );
};
