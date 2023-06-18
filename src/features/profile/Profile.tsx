import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { buttonText, infoMessage, title } from "@/assets/constants/contstanse";
import { Title } from "@/features/title/Title";
import { ReactComponent as Avatar } from "@/assets/avatar.svg";
import { ReactComponent as EditAvatar } from "@/assets/edit-avatar.svg";
import { ReactComponent as LogOut } from "@/assets/logout.svg";
import styled from "styled-components";
import { CustomButton } from "@/features/button/Button";
import {
  EditableSpan,
  StyledInputButton,
} from "@/features/profile/EditableSpan";
import { Message } from "@/features/Message/Message";
import React from "react";
import { StyledGrayButton } from "@/common/styles/commonStyles";

export const StyledAvatar = styled(Avatar)`
  max-width: 96px;
`;

export const StyledEditAvatar = styled(EditAvatar)`
  width: 32px;
`;

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 96px;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled(CustomButton)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  max-width: 32px;
  max-height: 32px;
  border-radius: 50%;
`;

export const Profile = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector((state) => state.auth.profile?.email);

  const changeDataHandler = () => {
    const payload = {
      name: "new name",
    };
    dispatch(authThunks.changeUsersData(payload));
  };

  return (
    <div>
      <Title>{title.profile}</Title>
      <StyledWrapper>
        <StyledAvatar />
        <StyledButton type="button" onClick={() => {}}>
          <StyledEditAvatar />
        </StyledButton>
      </StyledWrapper>
      <EditableSpan />
      <Message value={userEmail || ""} margin={"30px 0 15px"} />
      <StyledGrayButton type="button" className="button">
        <ButtonContainer>
          <LogOut />
          <p>{buttonText.userProfileLogout}</p>
        </ButtonContainer>
      </StyledGrayButton>
    </div>
  );
};
