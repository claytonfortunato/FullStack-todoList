import LogoutIcon from "../../assets/icons/sign-out.svg";

import * as C from "./styles";

export const Logout = () => {
  return (
    <C.Container>
      <img src={LogoutIcon} />
    </C.Container>
  );
};
