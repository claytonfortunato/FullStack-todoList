import { ReactNode } from "react";

export interface Item {
  id: string;
  title: string;
  done: boolean;
}

export interface User {
  email?: string;
  token?: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthProvider {
  children: ReactNode;
}
