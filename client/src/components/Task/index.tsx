import { useState } from "react";

import Check from "../../assets/icons/check.svg";
import Edit from "../../assets/icons/edit.svg";
import Delete from "../../assets/icons/delete.svg";

import * as C from "./styles";

interface TaskProps {
  item: any;
}

export const Task = ({ item }: TaskProps) => {
  const [isChecked, setIsChecked] = useState<TaskProps>();

  return (
    <C.Container>
      <C.Wrapper>
        <C.Description checked={isChecked} done={isChecked}>
          {item.name}
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
