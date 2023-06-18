import { useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./HeaderStyles";
import { ReactComponent as Logo } from "@/assets/header-logo.svg";
import { buttonText } from "@/assets/constants/contstanse";
import { StyledButton } from "@/common/styles/commonStyles";

export function Header() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/sign-in");
  }

  return (
    <HeaderWrapper>
      <Logo />
      <StyledButton type="button" onClick={onClickHandler} className="button">
        {buttonText.signIn}
      </StyledButton>
    </HeaderWrapper>
  );
}
