import * as C from "./styles";

interface PropsSelect {
  filter: string;
  selectFilter: (text: string) => void;
}

export const FilterTask = ({ filter, selectFilter }: PropsSelect) => {
  return (
    <C.Container>
      <C.Button className="allDelete">Delete All Tasks</C.Button>

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
