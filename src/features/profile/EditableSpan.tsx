import React, { useState } from "react";
import { ReactComponent as EditName } from "@/assets/edit-name.svg";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import styled from "styled-components";
import { CustomButton } from "@/shared/ui/button/Button";
import { FormInput } from "@/shared/ui/input/FormInput";
import { buttonText, labelText } from "@/assets/constants/contstanse";
import { colorVariables, StyledForm } from "@/common/styles/commonStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authThunks } from "@/features/auth/authSlice";

export const StyledIconButton = styled(CustomButton)`
  margin: 0;
  padding: 0;
  min-width: 13px;
  min-height: 14px;
  box-shadow: none;
  background: none;
`;

export const StyledInputButton = styled(CustomButton)`
  margin: 0;
  padding: 0;
  width: 52px;
  min-height: 24px;
  box-shadow: none;
  ${colorVariables};
  background-color: var(--blue-color);
`;

const schema = yup.object({
  name: yup.string().required("Name is required"),
});

type FormData = yup.InferType<typeof schema>;

export const EditableSpan = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.auth.profile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const payload = {
      name: data.name,
    };
    const result = await dispatch(authThunks.changeUsersData(payload));
    if (result.type === "auth/me/fulfilled") {
      setEditMode(false);
    }
  };

  const onClickEditNameHandler = () => {
    setEditMode(true);
  };

  return (
    <div>
      {editMode ? (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label={labelText.userProfile}
            type="text"
            name="name"
            register={register}
            errors={errors}
            inputProps={{ placeholder: userProfile?.name }}
          />
          <StyledInputButton type="submit" className="button">
            {buttonText.userProfileSave}
          </StyledInputButton>
        </StyledForm>
      ) : (
        <>
          <span>{userProfile?.name}</span>
          <StyledIconButton type="button" onClick={onClickEditNameHandler}>
            <EditName />
          </StyledIconButton>
        </>
      )}
    </div>
  );
};
