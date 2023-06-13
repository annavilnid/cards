import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

const StyledLink = styled(Link)<{
  margin?: string;
  alignSelf?: string;
  fontWeight?: string;
  color?: string;
  textDecorationLine?: string;
  fontSize?: string;
  lineHeight?: string;
}>`
  ${resetMarginsAndPaddings};
  font-family: "Montserrat", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  line-height: ${({ lineHeight }) => lineHeight || "16px"};
  margin: ${({ margin }) => margin || "0"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  align-self: ${({ alignSelf }) => alignSelf || "center"};
  ${colorVariables};
  color: ${({ color }) => color || "var(--blue-color)"};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine || "none"};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

type LinkProps = {
  margin?: string;
  alignSelf?: string;
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  textDecorationLine?: string;
  to: string;
  children: React.ReactNode;
};

export const CustomLink: React.FC<LinkProps> = ({
  to,
  children,
  margin,
  color,
  alignSelf,
  fontWeight,
  textDecorationLine,
  fontSize,
  lineHeight,
}) => {
  return (
    <StyledLink
      to={to}
      margin={margin}
      color={color}
      alignSelf={alignSelf}
      fontWeight={fontWeight}
      textDecorationLine={textDecorationLine}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </StyledLink>
  );
};
