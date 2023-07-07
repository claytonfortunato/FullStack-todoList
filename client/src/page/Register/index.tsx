import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormProvider } from "react-hook-form";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

export const Register = () => {
  const { loginForm, registerUser, data, setData } = useRegister();

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
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            error={loginForm.formState.errors.email?.message}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Input
            label="Senha novamente"
            placeholder="Digite sua senha novamente"
            type="password"
            name="password"
            error={loginForm.formState.errors.password?.message}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
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
