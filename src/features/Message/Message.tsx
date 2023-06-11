import React, { FC } from "react";
import { StyledText } from "@/features/Message/MessageStyle";

type MessageType = {
  value: string;
};

export const Message: FC<MessageType> = ({ value }) => {
  return <StyledText>{value}</StyledText>;
};
