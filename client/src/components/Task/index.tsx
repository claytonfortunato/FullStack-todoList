import { useState } from "react";

import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import { Item } from "../../interfaces/Item";

import * as C from "./styles";

interface TaskProps {
  description: string;
  done: boolean;
  id: string;
  // deleteTask: (id: string) => void;
  // checked: boolean;
  handleTodo: (id: string) => void;
}

export const Task = ({ id, description, done, handleTodo }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(done);

  const handleCheck = (e: any) => {
    handleTodo(id);
    setIsChecked(e.target.checked);
  };

  const handleChecked = () => {
    isChecked;
    done;
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description done={isChecked}>{description}</C.Description>
      </C.Wrapper>
      <C.Content>
        <input type="checkbox" id={id} checked={done} onChange={handleCheck} />
        <label htmlFor="check"></label>
        <C.IconImage src={Edit} />
        <C.IconImage src={Delete} />
      </C.Content>
    </C.Container>
  );
};
