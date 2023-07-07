import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IRegisterProps } from "../interfaces/types";
import { api } from "../services/api";

export const useRegister = () => {
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

  const LoginFormData = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
  });

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
    loginForm.reset();
  };

  return {
    loginForm,
    registerUser,
    data,
    setData,
  };
};
