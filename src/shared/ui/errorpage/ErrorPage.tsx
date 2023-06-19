import { useNavigate, useRouteError } from "react-router-dom";
import React from "react";
import { buttonText, infoMessage, title } from "@/assets/constants/contstanse";
import { Title } from "@/shared/ui/title/Title";
import { Message } from "@/shared/ui/message/Message";
import { StyledButton } from "@/common/styles/commonStyles";
import {
  ErrorContainer,
  ErrorWrapper,
  StyledError,
} from "@/shared/ui/errorpage/ErrorPageStyle";

export function ErrorPage() {
  const navigate = useNavigate();
  //TODO убрать error это ориентир для меня
  const error: any = useRouteError();
  console.error(error);

  //TODO уточнить какое home page в приложении и  праивыльно ли использовать кнопку, а не link
  function onClickHandler() {
    navigate("/sign-in");
  }

  return (
    <ErrorWrapper id="error-page">
      <ErrorContainer>
        <Title fontSize={"50px"} lineHeight={"1.22"}>
          {title["404"]}
        </Title>
        <Message
          value={infoMessage["404"]}
          margin={"11px 0 36px"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"2.25"}
          opacity={"1"}
          textAlign={"start"}
        />
        <StyledButton
          type="button"
          onClick={onClickHandler}
          className="button"
          minWidth={"218px"}
        >
          {buttonText["404"]}
        </StyledButton>
      </ErrorContainer>
      <StyledError />
    </ErrorWrapper>
  );
}
