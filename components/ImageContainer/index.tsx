import React from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface ImageOptions {
  width: string;
  height: string;
  style?: SerializedStyles;
}

interface ImageContainerProps extends ImageOptions {
  children: React.ReactNode;
}
/**
 * @param props children의 경우 layout = 'fill' & objecfFit은 원하는 값으로 설정 필요
 * @returns 이미지 컨테이너
 */
export default function ImageContainer({
  width,
  height,
  children,
  style,
}: ImageContainerProps) {
  return (
    <Container width={width} height={height} style={style}>
      {children}
    </Container>
  );
}

const Container = styled.div<ImageOptions>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  overflow: hidden;
  ${({ style }) => style}
`;
