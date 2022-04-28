import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { PaletteKeyTypes } from "styles/theme";

interface ButtonStyle {
  width: string;
  height: string;
  buttonColor?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  fontSize?: string;
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
  cursor: pointer;
  ${({
    theme,
    width = "auto",
    height = "auto",
    fontColor = "black",
    hasBorder = false,
    fontSize = "14px",
    buttonColor = "white",
    borderColor = "black",
    borderRadius = "4px",
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${theme.palette[borderColor]}` : "none"};
    background-color: ${theme.palette[buttonColor]};
    color: ${theme.palette[fontColor]};
    font-size: ${fontSize};
  `};
`;

export default Button;
