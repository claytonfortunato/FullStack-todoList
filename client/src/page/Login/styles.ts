import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #333;

  > .contentLogin {
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

export const Header = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  font-weight: 500;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #333;

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
