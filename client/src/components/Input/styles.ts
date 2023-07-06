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

  a {
    font-size: 12px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    transition: all 200ms ease-in;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;

  input {
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

  img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`;

export const InvalidMessage = styled.span`
  font-size: 12px;
  color: red;
`;
