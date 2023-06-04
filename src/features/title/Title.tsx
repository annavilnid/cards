import { TitleWrapper } from "./TitleStyle";
import { ReactNode } from "react";

type TitlePropsType = {
  children: ReactNode;
};

export function Title({ children }: TitlePropsType) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
