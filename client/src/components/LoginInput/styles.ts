import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #333;
`;

export const Content = styled.div`
  margin: 10px 0px;
`;

export const Label = styled.label`
  font-size: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.black};

  &:focus-within,
  :hover {
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
`;
