import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface BoxStyle {
  width?: string;
  height?: string;
  borderRadius?: string;
  isShadow?: boolean;
  backgroundColor?: string;
  borderColor?: string;
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
    width = "auto",
    height = "auto",
    borderRadius = "4px",
    isShadow = false,
    backgroundColor = "transparent",
    borderColor = "transparent",
    borderWidth = "1px",
  }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius};
    box-shadow: ${isShadow
      ? "0px 0px 10px rgba(0, 0, 0, 0.1)"
      : "none"}; // @Todo 임시 쉐도우
    background-color: ${backgroundColor};
    border: ${borderWidth} solid ${borderColor};
  `}
`;

export default Box;
