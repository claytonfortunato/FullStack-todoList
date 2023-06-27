import axios from "axios";

const baseUrl = "http://localhost:8000";

export const addTodo = (description: string) => {
  return fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: description,
      completed: false,
    }),
  }).then((response) => response.json());
};
