import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 14px 0px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 10px;

  &:focus-within,
  :hover {
    border: 1px solid ${(props) => props.theme.colors.purple};
  }
`;

export const ButtonInput = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 4px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #8978d6;
  transition: all 0.3s ease-in;

  &:hover {
    opacity: 0.8;
  }
`;
