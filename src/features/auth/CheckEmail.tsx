import { Title } from "@/shared/ui/title/Title";
import { buttonText, infoMessage, title } from "@/assets/constants/contstanse";
import { ReactComponent as Logo } from "@/assets/check-email.svg";
import { Message } from "@/shared/ui/message/Message";
import { CustomLink } from "@/shared/ui/link/CustomLink";
import React from "react";

export function CheckEmail() {
  return (
    <>
      <Title>{title.checkEmail}</Title>
      <Logo />
      <Message value={infoMessage.checkEmail} margin={"30px 0 15px"} />
      <CustomLink to="/sign-in">{buttonText.checkEmail}</CustomLink>
    </>
  );
}
