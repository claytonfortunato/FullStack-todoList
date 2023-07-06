export interface Item {
  id: string;
  title: string;
  done: boolean;
}

export interface IUser {
  email?: string;
  token?: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
