import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";
import { title } from "@/assets/constants/contstanse";
import { Title } from "@/features/title/Title";

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
      {/*<button onClick={getProfileHandler}>getProfile</button>*/}
      {/*<button onClick={changeDataHandler}>changeData</button>*/}
    </div>
  );
};
