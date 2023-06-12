import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  padding: 10px;

  > p {
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.red1};
    background-color: ${(props) => props.theme.colors.grey};
    border-radius: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 3.1rem;
  text-align: center;
`;
