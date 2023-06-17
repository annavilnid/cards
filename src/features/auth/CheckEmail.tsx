import { Title } from "@/features/title/Title";
import { buttonText, infoMessage, title } from "@/assets/constants/contstanse";
import logo from "@/assets/check-email.svg";
import { Message } from "@/features/Message/Message";
import { CustomLink } from "@/features/link/CustomLink";
import React from "react";

export function CheckEmail() {
  return (
    <>
      <Title>{title.checkEmail}</Title>
      <img src={logo} alt="Logo check email" />
      <Message value={infoMessage.checkEmail} margin={"30px 0 15px"} />
      <CustomLink to="/sign-in">{buttonText.checkEmail}</CustomLink>
    </>
  );
}
