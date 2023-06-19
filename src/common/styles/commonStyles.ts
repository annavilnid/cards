import styled from "styled-components";
import { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomButton } from "@/shared/ui/button/Button";

export const resetMarginsAndPaddings = css`
  margin: 0;
  padding: 0;
`;

export const font = css`
  font-family: "Montserrat", sans-serif;
`;

export const colorVariables = css`
  --blue-color: #366eff;
  --black-color: #000000;
  --wite-color: #ffffff;
  --gray-color: #fcfcfc;
  --lite-color: #f9f9fa;
  --red-color: #ff0000;
`;

export const hoverStyle = css`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const Button = styled.button`
  padding: 8px 28px;
  //box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35),
  //  inset 0 1px 0 rgba(255, 255, 255, 0.3);
  //border-radius: 30px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #ffffff;
  ${hoverStyle};
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 347px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-self: start;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

// TODO
// кнопка глаз расположена абсолютно, за ней может печататься текст, подумать как сделать это лучше

export const StyledEyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  ${hoverStyle};
`;

export const StyledButton = styled(CustomButton)<{
  margin?: string;
  minWidth?: string;
}>`
  &.button {
    ${colorVariables};
    background-color: var(--blue-color);
    margin: ${({ margin }) => margin || "0"};
    min-width: ${({ minWidth }) => minWidth || "347px"};
    //min-width: 347px;
    box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    letter-spacing: 0.01em;
  }
`;

export const StyledGrayButton = styled(CustomButton)<{ margin?: string }>`
  &.button {
    ${colorVariables};
    background-color: var(--gray-color);
    color: var(--black-color);
    margin: ${({ margin }) => margin || "0"};
    box-shadow: 0 2px 10px rgba(109, 109, 109, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;
  }
`;
