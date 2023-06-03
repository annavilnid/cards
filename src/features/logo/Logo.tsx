import styled from "styled-components";
import { Button } from "@/features/button/Button";
import { RouterProvider, useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  padding: 0 136px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  background: #fcfcfc;
  box-shadow: 0 2px 10px rgba(109, 109, 109, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #000000;
`;

export function Logo() {
  const navigate = useNavigate();
  function onClickHandler() {
    navigate("/sign-in");
  }

  return (
    <HeaderWrapper>
      <Title>it-incubator</Title>
      {/*<button onClick={onClickHandler}>Sign in</button>*/}
      <Button type="button" onClick={onClickHandler} />
    </HeaderWrapper>
  );
}
