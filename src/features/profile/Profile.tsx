import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { title } from "@/assets/constants/contstanse";
import { Title } from "@/features/title/Title";
import avatar from "@/assets/avatar.svg";
import { ReactComponent as Icon } from "@/assets/edit-avatar.svg";
import styled from "styled-components";

export const StyledAvatar = styled.img`
  max-width: 96px;
`;

export const Profile = () => {
  const dispatch = useAppDispatch();

  const getProfileHandler = () => {
    const payload = {};
    dispatch(authThunks.getProfile(payload));
  };

  const changeDataHandler = () => {
    const payload = {
      name: "new name",
    };
    dispatch(authThunks.changeUsersData(payload));
  };

  return (
    <div>
      <Title>{title.profile}</Title>
      <div>
        <StyledAvatar src={avatar} alt="avatar" />
        <button>
          <Icon />
        </button>
      </div>
      {/*<button onClick={getProfileHandler}>getProfile</button>*/}
      {/*<button onClick={changeDataHandler}>changeData</button>*/}
    </div>
  );
};
