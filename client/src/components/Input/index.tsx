import { InputHTMLAttributes, useState } from "react";

import Eye from "../../assets/icons/eye.svg";
import EyeSlash from "../../assets/icons/eye-slash.svg";

import { useFormContext } from "react-hook-form";
import * as C from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | undefined;
}

export const Input = ({
  label,
  name,
  type,
  error,
  ...inputProps
}: InputProps) => {
  const [hidden, setHidden] = useState(true);
  const { register } = useFormContext();

  const actualType = obtainInputActualType();

  const Icon = hidden ? (
    <img src={EyeSlash} alt="" onClick={handleToggleHideen} />
  ) : (
    <img src={Eye} alt="" onClick={handleToggleHideen} />
  );

  function obtainInputActualType() {
    if (type !== "password") {
      return type;
    }

    return hidden ? "password" : "text";
  }

  function handleToggleHideen() {
    setHidden((prevValue) => !prevValue);
  }

  return (
    <C.Container>
      <C.LabelWrapper>
        <label htmlFor={name}>{label}</label>
      </C.LabelWrapper>
      <C.InputWrapper error={!!error}>
        <input
          id={name}
          type={actualType}
          {...register(name)}
          {...inputProps}
        />

        {type === "password" ? Icon : <></>}
      </C.InputWrapper>
      {error && <C.InvalidMessage>{error}</C.InvalidMessage>}
    </C.Container>
  );
};
