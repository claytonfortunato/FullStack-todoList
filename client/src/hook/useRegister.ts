import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterProps } from "../interfaces/types";

import { api } from "../services/api";

export const useRegister = () => {
  const schema: ZodType<IRegisterProps> = z
    .object({
      name: z.string().min(2, "Digite seu nome").max(30),
      email: z.string().email("Digite um e-mail válido"),
      password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
      confirmPassword: z
        .string()
        .min(6, "A senha precisa de no mínimo 6 caracteres")
        .max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  type LoginFormData = z.infer<typeof schema>;

  // const LoginFormData = useForm<LoginFormData>({
  //   resolver: zodResolver(loginFormValidationSchema),
  // });

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const [data, setData] = useState<IRegisterProps>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (e: any) => {
    e.preventDefault();
    loginForm.register;
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

  return { setData, data, register, handleSubmit, registerUser, errors };
};
