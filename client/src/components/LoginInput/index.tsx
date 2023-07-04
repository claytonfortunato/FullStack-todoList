import { useContext, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import * as C from "./styles";
import { useNavigate } from "react-router-dom";

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
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      await axios.post("/login", {
        email,
        password,
      });
      if (data) {
        setData({});
        navigate("/todo");
      }
    } catch (error) {}

    axios.get("/");
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container noValidate onSubmit={handleLogin}>
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
