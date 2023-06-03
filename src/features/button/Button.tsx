import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  background?: string;
  onClick?: () => void;
  minWidth?: string;
  type: "button" | "submit" | "reset";
};

const StyledButton = styled.button<ButtonPropsType>`
  background-color: ${({ background }) => background || "#366EFF"};
  min-width: ${({ minWidth }) => minWidth || "113px"};
  padding: 8px 28px;
  box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export function Button({ background, minWidth, onClick, type }: ButtonPropsType) {
  return (
    <StyledButton type={type} onClick={onClick ? onClick : undefined} minWidth={minWidth} background={background}>
      Sign in
    </StyledButton>
  );
}
