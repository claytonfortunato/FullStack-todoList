import styled from "styled-components";
import check from "../../assets/icons/check.svg";

interface ContainerProps {
  done?: boolean;
}
export const IconImage = styled.img<ContainerProps>`
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.11);
  }
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
`;

export const Wrapper = styled.div``;

export const Description = styled.p<ContainerProps>`
  font-size: 16px;

  text-decoration: ${({ done }) => (done ? "line-through" : "initial")};
`;

export const Content = styled.div`
  display: flex;
  gap: 14px;

  label {
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;

    &:hover {
      &::before {
        background-color: #88fa97;
      }
    }
  }

  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  input:checked {
    & + label::before {
      content: "\\002714";
      background-color: green;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  input::checked {
    & + label::before {
      content: "\\002714";
      background-color: green;
    }
  }

  label::before {
    content: "";
    border: 0.05em solid #333;
    height: 1em;
    width: 1em;
    border-radius: 0.15em;
  }
`;
