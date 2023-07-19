import { useContext } from "react";
import { UserContext } from "../../contexts/Auth/userContext";

export const Header = () => {
  const { user } = useContext(UserContext);

  return <div>{!!user && <h1>Hi {user.name}</h1>}</div>;
};
