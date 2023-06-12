import { useState } from "react";

import Check from "../../assets/icons/check.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import { Item } from "../../interfaces/Item";

import * as C from "./styles";

interface TaskProps {
  item: Item;
  deleteTask: (id: string) => void;
  onChange: (checked: boolean) => void;
  checked: boolean;
}

export const Task = ({ item, deleteTask }: TaskProps) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description done={isChecked}>{item.title}</C.Description>
      </C.Wrapper>
      <C.Content>
        {/* <C.IconImage
          src={Check}
          checked={isChecked}
          onChange={() => setIsChecked(item.done)}
        /> */}
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="check"></label>
        <C.IconImage src={Edit} />
        <C.IconImage src={Delete} onClick={() => deleteTask(item.id)} />
      </C.Content>
    </C.Container>
  );
};
