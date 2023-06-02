import { useAppDispatch } from "@/app/hooks";
import { authThunks } from "@/features/auth/authSlice";

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
      <h1>Profile</h1>
      <button onClick={getProfileHandler}>getProfile</button>
      <button onClick={changeDataHandler}>changeData</button>
    </div>
  );
};
