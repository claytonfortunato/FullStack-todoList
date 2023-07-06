import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Input } from "../../components/Input";

import { IRegisterProps } from "../../interfaces/types";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import * as C from "./styles";

const loginFormValidationSchema = zod.object({
  nome: zod.string({
    required_error: "nome é obrigatório",
  }),
  email: zod
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Digite um e-mail válido"),
  password: zod.string().min(6, "Senha é obrigatória"),
});

type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export const Register = () => {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      nome: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const [data, setData] = useState<IRegisterProps>({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async () => {
    loginForm.reset();
    // e.preventDefault();
    // const { name, email, password } = data;
    // try {
    //   const { data } = await api.post("/register", {
    //     name,
    //     email,
    //     password,
    //   });
    //   if (data.error) {
    //     toast.error(data.error);
    //   } else {
    //     toast.success("Login Successful. Welcome!");
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container>
        <C.Header>Register Account</C.Header>

        <C.ContainerForm
          noValidate
          onSubmit={loginForm.handleSubmit(registerUser)}
        >
          <Input
            label="Nome"
            name="nome"
            placeholder="Digite seu nome"
            error={loginForm.formState.errors.nome?.message}
          />
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            error={loginForm.formState.errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
          />
          <Input
            label="Senha novamente"
            placeholder="Digite sua senha novamente"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
          />
          {/* <C.Label>
          Name
          <C.Input
            type="text"
            placeholder="Digite seu nome"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Email
          <C.Input
            type="text"
            placeholder="Digite o seu email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Password
          <C.Input
            type="password"
            placeholder="Digite sua senha"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </C.Label>

        <C.Label>
          Repeat Password
          <C.Input type="password" placeholder="Digite sua senha novamente" />
        </C.Label> */}

          <C.Button type="submit">Register</C.Button>
        </C.ContainerForm>

        <C.Content>
          <p>Já possui conta?</p>
          <Link to="/">Log in</Link>
        </C.Content>
      </C.Container>
    </FormProvider>
  );
};
