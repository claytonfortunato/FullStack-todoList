import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > nav {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.h1`
  font-size: 3.1rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ddd;
  border-radius: 6px;
`;

export const Content = styled.div`
  background-color: #ddd;
  max-width: 600px;
  width: 100%;
  border-radius: 6px;

  > p {
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.red1};
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    margin: 18px;
  }
`;

export const ContentMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0px;

  > select {
    padding: 4px;
    background-color: #ddd;
    outline: none;
    border: none;
    border-radius: 6px;
  }
`;
