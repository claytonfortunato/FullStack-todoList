import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  width: 400px;
  padding: 10px;
  border-radius: 10px;

  input {
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.black};
  }

  label {
    font-size: 1.6rem;
  }

  > button {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  margin: 10px 0px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.purple};
  border: none;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
`;
