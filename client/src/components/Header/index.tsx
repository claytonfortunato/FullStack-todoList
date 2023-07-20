import { useContext } from "react";
import { UserContext } from "../../contexts/Auth/userContext";

import Logout from "../../assets/icons/sign-out.svg";

import * as C from "./styles";

export const Header = () => {
  const { user } = useContext<any>(UserContext);

  return (
    <C.Container>
      {!!user && <h1>Olá, {user.name}</h1>}
      <img src={Logout} alt="" />
    </C.Container>
  );
};
