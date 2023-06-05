import styled from "styled-components";

// interface Done {
//   done: boolean;
// }
export const IconImage = styled.img`
  cursor: pointer;
`;

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  padding: 6px;
  border-radius: 12px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Wrapper = styled.div``;

export const Description = styled.label`
  font-size: 16px;
`;

export const Content = styled.div`
  display: flex;
  gap: 14px;
`;
