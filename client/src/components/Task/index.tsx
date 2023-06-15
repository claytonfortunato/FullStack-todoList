import { useState } from "react";

import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import * as C from "./styles";

interface TaskProps {
  description: string;
  done: boolean;
  id: string;
  edit: (e: any) => void;
  deleteTask: (id: string) => void;
  handleTodo: (id: string) => void;
}

export const Task = ({
  id,
  description,
  done,
  edit,
  handleTodo,
  deleteTask,
}: TaskProps) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleCheck = (e: any) => {
    handleTodo(id);
    setIsChecked(e.target.checked);
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description done={isChecked}>{description}</C.Description>
      </C.Wrapper>
      <C.Content>
        <input type="checkbox" id={id} checked={done} onChange={handleCheck} />
        <label htmlFor="check"></label>
        <C.IconImage src={Edit} onClick={() => edit(id)} />
        <C.IconImage src={Delete} onClick={() => deleteTask(id)} />
      </C.Content>
    </C.Container>
  );
};
