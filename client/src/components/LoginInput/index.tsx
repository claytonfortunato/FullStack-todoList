import { useState } from "react";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import * as C from "./styles";

const loginFormValidationSchema = zod.object({
  email: zod
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Digite um e-mail válido"),
  password: zod.string().min(1, "Senha é obrigatória"),
});

type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export const LoginInput = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleLogin = () => {
    loginForm.reset();
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container noValidate onSubmit={loginForm.handleSubmit(handleLogin)}>
        <C.Content>
          <C.Label>
            Email
            <C.Input
              type="text"
              placeholder="Digite seu Email"
              onChange={handleChange}
            />
          </C.Label>
          {loginForm.formState.errors.email?.message}
        </C.Content>

        <C.Content>
          <C.Label>
            Senha
            <C.Input
              type="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
            />
          </C.Label>
          {loginForm.formState.errors.password?.message}
        </C.Content>

        <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
      </C.Container>
    </FormProvider>
  );
};
