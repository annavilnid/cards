import React, { ReactNode } from "react";
import { Button } from "@/common/styles/commonStyles";

type ButtonPropsType = {
  className?: string;
  children: ReactNode;
  background?: string;
  onClick?: () => void;
  minWidth?: string;
  type: "button" | "submit" | "reset";
};

export function CustomButton({ className, children, onClick, type }: ButtonPropsType) {
  return (
    <Button type={type} className={className} onClick={onClick ? onClick : undefined}>
      {children}
    </Button>
  );
}
