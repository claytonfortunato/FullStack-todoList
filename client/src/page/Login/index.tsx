import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

import { useRegister } from "../../hook/useRegister";

import * as C from "./styles";

interface LoginProps {
  email: string;
  password: string;
}

// const loginFormValidationSchema: ZodType<LoginProps> = z.object({
//   email: z
//     .string({
//       required_error: "Email é obrigatório",
//     })
//     .email("Digite um e-mail válido"),
//   password: z
//     .string({
//       required_error: "Senha é obrigatório",
//     })
//     .min(6, "A senha precisa de no mínimo 6 caracteres"),
// });

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: zodResolver(loginFormValidationSchema),
//   defaultValues: {
//     email: "",
//     password: "",
//   },
// });

// type LoginFormData = z.infer<typeof loginFormValidationSchema>;

// const LoginFormData = useForm<LoginFormData>({
//   resolver: zodResolver(loginFormValidationSchema),
// });

export const Login = () => {
  const navigate = useNavigate();

  const { setData, data, handleSubmit, loginUser, errors, register } =
    useRegister();

  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const loginForm = useForm<LoginFormData>({
  //   resolver: zodResolver(loginFormValidationSchema),
  // });

  // const loginUser = async () => {
  //   const { email, password } = data;

  //   try {
  //     const { data } = await api.post("/login", {
  //       email,
  //       password,
  //     });
  //     if (data.error) {
  //       toast.error(data.error);
  //     } else {
  //       navigate("/todo");
  //     }
  //   } catch (error) {}
  // };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, password: e.target.value });
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  return (
    <C.Container>
      <C.Header>ToDo List</C.Header>

      <C.ContainerForm onSubmit={handleSubmit(loginUser)}>
        <div className="contentLogin">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            value={data.email}
            onChange={handleEmail}
          />
          {errors.email && <span> {errors.email.message} </span>}
        </div>
        <div className="contentLogin">
          <label>Senha</label>
          <input
            type="password"
            {...register("password")}
            value={data.password}
            onChange={handlePassword}
          />
          {errors.password && <span> {errors.password.message} </span>}
        </div>
        <C.Button type="submit">{loading ? "Loading..." : "Log In"}</C.Button>
      </C.ContainerForm>
      <C.Action>
        <p>Você não possui conta?</p>
        <Link to="/register">Sign up</Link>
      </C.Action>
    </C.Container>
  );
};
