export interface Item {
  id: string;
  title: string;
  done: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}

export type FilterProps = "all" | "toDo" | "complete";
