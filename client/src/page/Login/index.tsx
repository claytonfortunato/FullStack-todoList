import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

const loginFormValidationSchema = zod.object({
  email: zod
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Digite um e-mail válido"),
  password: zod
    .string({
      required_error: "Senha é obrigatório",
    })
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { data, setData } = useRegister();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  const registerUser = async () => {
    loginForm.reset();
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container>
        <C.Header>ToDo List</C.Header>

        <C.ContainerForm
          noValidate
          onSubmit={loginForm.handleSubmit(registerUser)}
        >
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            error={loginForm.formState.errors.email?.message}
            onInvalid={() => console.log(123)}
            value={data.name}
            handleChange={handleName}
          />

          <Input
            label="Senha"
            placeholder="Digite sua senha"
            name="password1"
            type="password"
            error={loginForm.formState.errors.password?.message}
            value={data.email}
            handleChange={handleEmail}
          />

          <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
        </C.ContainerForm>
        <C.Action>
          <p>Você não possui conta?</p>
          <Link to="/register">Sign up</Link>
        </C.Action>
      </C.Container>
    </FormProvider>
  );
};
