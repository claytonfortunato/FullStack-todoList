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

export interface AuthProvider {
  children: JSX.Element;
}
