import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

import { LoginInput } from "../../components/LoginInput";

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

export const Login = () => {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerUser = async () => {
    loginForm.reset();
  };

  return (
    <FormProvider {...loginForm}>
      <C.Container>
        <C.Header>ToDo List</C.Header>
        {/* <LoginInput /> */}
        <Input
          label="Email"
          placeholder="Digite seu e-mail"
          name="email"
          error={loginForm.formState.errors.email?.message}
        />
        <C.Action>
          <p>Você não possui conta?</p>
          <Link to="/register">Sign up</Link>
        </C.Action>
      </C.Container>
    </FormProvider>
  );
};
