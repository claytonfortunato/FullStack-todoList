import { FormEvent, FormEventHandler, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import { toast } from "react-hot-toast";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../../contexts/Auth/useAuth";
import * as C from "./styles";
import { api } from "../../services/api";

interface Props {
  email: string;
  password: string;
}

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
  const [data, setData] = useState<Props>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onFinish(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();

    try {
      await api.post("/login", { email, password });
    } catch (error) {}
  }

  return (
    <FormProvider {...loginForm}>
      <C.Container noValidate onSubmit={() => onFinish}>
        <C.Content>
          <C.Label>
            Email
            <C.Input
              type="text"
              placeholder="Digite seu Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
            />
          </C.Label>
        </C.Content>

        <C.Content>
          <C.Label>
            Senha
            <C.Input
              type="password"
              placeholder="Digite sua senha"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </C.Label>
        </C.Content>

        <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
      </C.Container>
    </FormProvider>
  );
};
