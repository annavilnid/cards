import React, { FC } from "react";
import { StyledText } from "@/features/Message/MessageStyle";

type MessageType = {
  value: string;
  margin?: string;
  textAlign?: string;
};

export const Message: FC<MessageType> = ({ value, margin, textAlign }) => {
  return (
    <StyledText margin={margin} textAlign={textAlign}>
      {value}
    </StyledText>
  );
};
