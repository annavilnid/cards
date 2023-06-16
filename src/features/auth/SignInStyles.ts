import { CustomButton } from "@/features/button/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorVariables, hoverStyle } from "@/common/styles/commonStyles";

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

export const StyledButton = styled(CustomButton)`
  &.button {
    ${colorVariables};
    background-color: var(--blue-color);
    margin: 70px 0 0 0;
    min-width: 347px;
  }
`;
