import { useState, ChangeEvent } from "react";
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
  name: zod
    .string()
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[8].toLocaleUpperCase().concat(word.substring(1));
        });
    }),
  email: zod
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Digite um e-mail válido"),
  password: zod.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export const Register = () => {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  const navigate = useNavigate();

  const [data, setData] = useState<IRegisterProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e: any) => {
    loginForm.reset();
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await api.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Login Successful. Welcome!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: e.target.value });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
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
            name="name"
            placeholder="Digite seu nome"
            error={loginForm.formState.errors.name?.message}
            value={data.name}
            data={handleChangeName}
          />
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            error={loginForm.formState.errors.email?.message}
            value={data.email}
            data={handleChangeEmail}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
            value={data.password}
            data={handleChangePassword}
          />
          <Input
            label="Senha novamente"
            placeholder="Digite sua senha novamente"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
            value={data.password}
            data={handleChangePassword}
          />

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
