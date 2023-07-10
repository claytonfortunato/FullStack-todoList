import { InputHTMLAttributes, useState, ChangeEvent } from "react";

import Eye from "../../assets/icons/eye.svg";
import EyeSlash from "../../assets/icons/eye-slash.svg";

import { useFormContext } from "react-hook-form";
import * as C from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  name,
  type,
  error,
  value,
  handleChange,
  ...inputProps
}: InputProps) => {
  const [hidden, setHidden] = useState(true);
  const { register } = useFormContext();

  const actualType = obtainInputActualType();
  const recoverPassword = <a href="#">Esqueceu a senha?</a>;

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
        {name === "password1" ? recoverPassword : <></>}
      </C.LabelWrapper>
      <C.InputWrapper error={!!error}>
        <input
          id={name}
          type={actualType}
          value={value}
          {...register(name, { onChange: handleChange })}
          {...inputProps}
        />

        {type === "password" ? Icon : <></>}
      </C.InputWrapper>
      {error && <C.InvalidMessage>{error}</C.InvalidMessage>}
    </C.Container>
  );
};
