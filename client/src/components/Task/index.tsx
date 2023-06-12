import { useState } from "react";

import Check from "../../assets/icons/check.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import * as C from "./styles";

interface TaskProps {
  item: any;
  deleteTask: (id: string) => void;
  taskDone: (id: string) => void;
}

export const Task = ({ item, deleteTask, taskDone }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description done={isChecked} checked={isChecked}>
          {item.name}
        </C.Description>
      </C.Wrapper>
      <C.Content>
        <C.IconImage
          src={Check}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <C.IconImage src={Edit} />
        <C.IconImage src={Delete} onClick={() => deleteTask(item.id)} />
      </C.Content>
    </C.Container>
  );
};
