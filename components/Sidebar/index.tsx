import styled from "@emotion/styled";
import Button from "components/Button";
import { ReactElement, useState } from "react";
import transitions from "styles/transitions";

export default function Sidebar(): ReactElement {
  const sidebarMenus = [
    "대쉬보드",
    "질문한 글",
    "답변한 글",
    "댓글단 글",
    "추천한 글",
    "스크랩",
    "포인트",
    "프로필 수정",
  ];
  const [selectedMenu, setSelectedMenu] = useState<number>();
  return (
    <AsideStyle>
      {sidebarMenus.map((v: string, i: number) => {
        return (
          <li
            className={`eachMenu ${selectedMenu === i ? "selected" : ""}`}
            key={i}
            onClick={() => {
              setSelectedMenu(i);
            }}
          >
            {v}
          </li>
        );
      })}
    </AsideStyle>
  );
}

const AsideStyle = styled.aside`
  width: 139px;
  min-height: calc(100vh - 99px);
  padding: 70px 8px;

  .eachMenu {
    width: 123px;
    height: 29px;
    line-height: 29px;
    font-size: 12px;
    cursor: pointer;

    list-style-type: none;
    background: none;
    border: none;
    justify-content: flex-start;
    padding-left: 12px;
    color: #525960;

    &.selected {
      border-radius: 1000px;
      background: #f1f2f3;
      animation: ${transitions.fadeIn} 0.2s ease-in;
    }
  }
`;
