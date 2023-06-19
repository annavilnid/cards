import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorVariables, resetMarginsAndPaddings } from "@/common/styles/commonStyles";

//TODO
//Уточнить про alignself, textdecorationline, lineheight
//

const StyledLink = styled(Link)<{
  margin?: string;
  alignself?: string;
  fontWeight?: string;
  color?: string;
  textdecorationline?: string;
  fontSize?: string;
  lineheight?: string;
}>`
  ${resetMarginsAndPaddings};
  font-family: "Montserrat", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  line-height: ${({ lineheight }) => lineheight || "16px"};
  margin: ${({ margin }) => margin || "0"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  align-self: ${({ alignself }) => alignself || "center"};
  ${colorVariables};
  color: ${({ color }) => color || "var(--blue-color)"};
  text-decoration-line: ${({ textdecorationline }) => textdecorationline || "none"};
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
      alignself={alignSelf}
      fontWeight={fontWeight}
      textdecorationline={textDecorationLine}
      fontSize={fontSize}
      lineheight={lineHeight}
    >
      {children}
    </StyledLink>
  );
};
