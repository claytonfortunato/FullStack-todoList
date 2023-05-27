import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 6px;
  border-radius: 12px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Wrapper = styled.div``;

export const Description = styled.span`
  font-size: 16px;
`;

export const Content = styled.div`
  span {
    margin: 0px 10px;
  }
`;
