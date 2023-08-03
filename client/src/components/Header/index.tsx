import { useContext } from "react";
import { UserContext } from "../../contexts/Auth/userContext";

import Logout from "../../assets/icons/sign-out.svg";

import * as C from "./styles";

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <C.Container>
      {!!user && <h2>{user.name}</h2>}
      <img src={Logout} alt="" />
    </C.Container>
  );
};
