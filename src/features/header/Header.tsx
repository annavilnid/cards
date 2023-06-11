import { useNavigate } from "react-router-dom";
import { HeaderWrapper, StyledButton } from "./HeaderStyles";
import logo from "@/assets/header-logo.svg";

export function Header() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/form");
  }

  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo IT-Incubator" />
      <StyledButton type="button" onClick={onClickHandler} className="button">
        Form
      </StyledButton>
    </HeaderWrapper>
  );
}
