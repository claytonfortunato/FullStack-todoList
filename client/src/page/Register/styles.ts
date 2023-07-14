import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 500;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.black};
  padding: 10px;
  border-radius: 10px;

  > .contentRegister {
    width: 100%;

    > input {
      width: 100%;
      padding: 4px;
      border-radius: 8px;
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.black};

      font-size: 1.4rem;

      &::placeholder {
        color: ${(props) => props.theme.colors.grey400};
      }

      &:focus-within,
      :hover {
        border: 1px solid ${(props) => props.theme.colors.purple};
      }
    }

    > label {
      margin: 6px 0px;
      font-size: 14px;
    }

    > span {
      color: red;
      font-size: 1.2rem;
    }
  }
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

export const Label = styled.label`
  margin: 6px 0px;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.black};

  > p {
    font-size: 16px;
  }

  > a {
    margin-left: 10px;
    text-decoration: none;
    font-size: 16px;
    color: ${(props) => props.theme.colors.purple};

    &:hover {
      text-decoration: underline;
    }
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
