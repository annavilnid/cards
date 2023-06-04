import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export const CustomLink: React.FC<LinkProps> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
