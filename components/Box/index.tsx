import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { PaletteKeyTypes } from "styles/theme";

interface BoxStyle {
  width?: string;
  height?: string;
  borderRadius?: string;
  isShadow?: boolean;
  backgroundColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderWidth?: string;
}

interface BoxProps extends BoxStyle {
  children: React.ReactNode;
  className?: string;
}

function Box({ children, className, ...rest }: BoxProps): ReactElement {
  return (
    <BoxStyled className={className} {...rest}>
      {children}
    </BoxStyled>
  );
}

const BoxStyled = styled.div<BoxStyle>`
  ${({
    theme,
    width = "auto",
    height = "auto",
    borderRadius = "4px",
    isShadow = false,
    hasBorder = false,
    backgroundColor = "white",
    borderColor = "black",
    borderWidth = "1px",
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    box-shadow: ${isShadow
      ? "0px 0px 10px rgba(0, 0, 0, 0.1)"
      : "none"}; // @Todo 임시 쉐도우
    background-color: ${theme.palette[backgroundColor]};
    border: ${hasBorder
      ? `${borderWidth} solid ${theme.palette[borderColor]}`
      : "none"};
  `}
`;

export default Box;
