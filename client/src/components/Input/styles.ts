import styled from "styled-components";

interface InputWrapperProps {
  disabled?: boolean;
  error: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    margin: 6px 0px;
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 4px;
    border-radius: 8px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.black};

    &:focus-within,
    :hover {
      border: 1px solid ${(props) => props.theme.colors.purple};
    }
  }

  img {
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  }
`;

export const InvalidMessage = styled.span`
  font-size: 12px;
  color: red;
`;
