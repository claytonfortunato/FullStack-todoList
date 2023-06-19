import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
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
