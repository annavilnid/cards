import { TitleWrapper } from "./TitleStyle";
import { ReactNode } from "react";

type TitlePropsType = {
  children: ReactNode;
  margin?: string;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
};

export function Title({
  children,
  margin,
  padding,
  fontSize,
  lineHeight,
}: TitlePropsType) {
  return (
    <TitleWrapper
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </TitleWrapper>
  );
}
