import * as C from "./styles";

export const Task = () => {
  const [isChecked, setIsChecked] = useState();

  return (
    <C.Container>
      <C.Wrapper>
        <input type="checkbox" />
        <C.Description>Teste1</C.Description>
      </C.Wrapper>
      <C.Content>
        <span>Editar</span>
        <span>Delete</span>
      </C.Content>
    </C.Container>
  );
};
