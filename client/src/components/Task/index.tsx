import { useState } from "react";

import Check from "../../assets/icons/check.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import * as C from "./styles";

interface TaskProps {
  item: any;
  deleteTask: (id: number) => void;
}

export const Task = ({ item, deleteTask }: TaskProps) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description done={false}>{item.name}</C.Description>
      </C.Wrapper>
      <C.Content>
        <C.IconImage src={Check} />
        <C.IconImage src={Edit} />
        <C.IconImage src={Delete} onClick={() => deleteTask(item.id)} />
      </C.Content>
    </C.Container>
  );
};
