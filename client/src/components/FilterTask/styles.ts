import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
`;

export const Button = styled.button`
  padding: 4px;
  border-radius: 6px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.black};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple02};
  }
`;

export const Select = styled.select`
  padding: 4px;
  background-color: ${(props) => props.theme.colors.purple};
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
