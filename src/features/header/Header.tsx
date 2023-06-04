import { useNavigate } from "react-router-dom";
import { HeaderWrapper, Title, StyledButton } from "./HeaderStyles";

export function Header() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/sign-in");
  }

  return (
    <HeaderWrapper>
      <Title>it-incubator</Title>
      <StyledButton type="button" onClick={onClickHandler} className="button">
        Sign In
      </StyledButton>
    </HeaderWrapper>
  );
}
