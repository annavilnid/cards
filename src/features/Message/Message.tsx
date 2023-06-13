import React, { FC } from "react";
import { StyledText } from "@/features/Message/MessageStyle";

type MessageType = {
  value: string;
  margin?: string;
};

export const Message: FC<MessageType> = ({ value, margin }) => {
  return <StyledText margin={margin}>{value}</StyledText>;
};
