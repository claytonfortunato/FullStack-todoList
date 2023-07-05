import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/sign-out.svg";

import { UserContext } from "../../contexts/Auth/AuthProvider";

import * as C from "./styles";

export const Logout = () => {
  const { user } = useContext<any>(UserContext);
  const navigate = useNavigate();

  const HandleLogout = () => {
    navigate("/");
  };

  return (
    <C.Container>
      {!!user && <h1>Olá {user.name}, tudo bom?</h1>}
      <img src={LogoutIcon} alt="" onClick={HandleLogout} />
    </C.Container>
  );
};
