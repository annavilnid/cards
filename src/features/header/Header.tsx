import { useNavigate } from "react-router-dom";
import { HeaderWrapper, StyledButton } from "./HeaderStyles";
import logo from "@/assets/header-logo.svg";
import { buttonText } from "@/assets/constants/contstanse";

export function Header() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/sign-in");
  }

  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo IT-Incubator" />
      <StyledButton type="button" onClick={onClickHandler} className="button">
        {buttonText.signIn}
      </StyledButton>
    </HeaderWrapper>
  );
}
