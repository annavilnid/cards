import React, { FC } from "react";
import { StyledText } from "@/shared/ui/message/MessageStyle";

type MessageType = {
  value: string;
  margin?: string;
  textAlign?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  opacity?: string;
};

export const Message: FC<MessageType> = ({
  value,
  margin,
  textAlign,
  fontWeight,
  fontSize,
  lineHeight,
  opacity,
}) => {
  return (
    <StyledText
      margin={margin}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      opacity={opacity}
    >
      {value}
    </StyledText>
  );
};
