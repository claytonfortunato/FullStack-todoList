import styled from "styled-components";

export const Container = styled.div`
  /* background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  padding: 10px; */
  width: 100vw;
  height: 100vh;
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
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 10px;
  }
`;
