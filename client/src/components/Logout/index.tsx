import { useContext } from "react";
import LogoutIcon from "../../assets/icons/sign-out.svg";

import * as C from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Logout = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  };

  return (
    <C.Container>
      <C.Header>
        <h1>Olá {auth.user?.name}, tudo bom?</h1>
      </C.Header>

      {/* <button onClick={handleLogout}>Sair</button> */}
      <img src={LogoutIcon} onClick={handleLogout} />
    </C.Container>
  );
};
