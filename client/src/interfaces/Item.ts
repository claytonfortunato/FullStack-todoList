export interface Item {
  id: string;
  title: string;
  done: boolean;
}

export type FilterProps = "all" | "toDo" | "complete";
