import styled from "styled-components";

type TitlePropsType = {
  value: string;
};

const TitleWrapper = styled.h1<TitlePropsType>`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #000000;
`;

export function Header({ value }: TitlePropsType) {
  return <TitleWrapper value={value}>Sign up</TitleWrapper>;
}
