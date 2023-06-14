import styled from "styled-components";
import { css } from "styled-components";

export const resetMarginsAndPaddings = css`
  margin: 0;
  padding: 0;
`;

export const colorVariables = css`
  --blue-color: #366eff;
  --black-color: #000000;
  --wite-color: #ffffff;
  --gray-color: #fcfcfc;
  --red-color: #ff0000;
`;

export const Button = styled.button`
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
