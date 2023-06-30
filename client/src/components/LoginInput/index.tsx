import { ChangeEvent, useContext, useState } from "react";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import * as C from "./styles";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {};

  return (
    <FormProvider {...loginForm}>
      <C.Container noValidate onSubmit={handleLogin}>
        <C.Content>
          <C.Label>
            Email
            <C.Input
              type="text"
              placeholder="Digite seu Email"
              onChange={handleEmailInput}
            />
          </C.Label>
        </C.Content>

        <C.Content>
          <C.Label>
            Senha
            <C.Input
              type="password"
              placeholder="Digite sua senha"
              onChange={handlePasswordInput}
            />
          </C.Label>
        </C.Content>

        <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
      </C.Container>
    </FormProvider>
  );
};
