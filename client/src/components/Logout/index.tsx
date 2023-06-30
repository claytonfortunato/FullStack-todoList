import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LogoutIcon from "../../assets/icons/sign-out.svg";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import * as C from "./styles";

export const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Header>
        <h1>Olá {auth.user?.name}, tudo bom?</h1>
      </C.Header>
    </C.Container>
  );
};
