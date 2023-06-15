import * as C from "./styles";

interface PropsSelect {
  filter: string;
  removeAll: () => void;
  selectFilter: (text: any) => void;
}

export const FilterTask = ({
  filter,
  removeAll,
  selectFilter,
}: PropsSelect) => {
  return (
    <C.Container>
      <C.Button className="allDelete" onClick={removeAll}>
        Delete All Tasks
      </C.Button>

      <C.Select
        name="selectTask"
        value={filter}
        onChange={(text) => selectFilter(text.target.value)}
      >
        <option value="all">Todos</option>
        <option value="toDo">Para fazer</option>
        <option value="complete">Completos</option>
      </C.Select>
    </C.Container>
  );
};
