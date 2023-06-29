import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  > nav {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ddd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.black};

  input {
    width: 100%;
    padding: 4px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.black};
    border-radius: 10px;
  }
  button {
    width: 100%;
    margin-top: 10px;
    padding: 4px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #8978d6;
    color: ${(props) => props.theme.colors.black};

    &:hover {
      background-color: ${(props) => props.theme.colors.purple02};
      color: black;
    }
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  max-width: 600px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.black};

  > p {
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.red1};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    margin: 12px;
    padding: 6px;
  }
`;
