import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface ButtonStyle {
  width: string;
  height: string;
  buttonColor?: "blue"; // @Todo palette 완성되면 수정
  fontColor?: "black"; // @Todo palette 완성되면 수정 (기본 값은 black)
  borderColor?: "black"; // @Todo palette 완성되면 수정 (기본 값은 null)
  borderRadius?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: React.ReactNode;
  className?: string;
}

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyle>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  ${({
    width = "auto",
    height = "auto",
    fontColor = "black", // @Todo 여기 default 값들 다 임시 값 입니다~
    buttonColor = "blue",
    borderColor = "black",
    borderRadius = "4px",
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    border: 1px solid ${borderColor};
    background-color: ${buttonColor};
    color: ${fontColor};
  `}
`;

export default Button;
