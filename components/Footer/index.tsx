import styled from "@emotion/styled";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  const menuList = [
    "정보",
    "웹접근성",
    "사용자약관",
    "개인정보 처리방침",
    "쿠키정책",
    "저작권정책",
    "브랜드 정책",
    "비회원 설정",
    "커뮤니티정책",
  ];

  return (
    <FooterStyled>
      <div className="logo">Miduba</div>
      {menuList.map((v: string, i: number) => {
        return (
          <div className="eachMenu" key={i}>
            {v}
          </div>
        );
      })}
    </FooterStyled>
  );
}

const FooterStyled = styled.section`
  display: flex;
  width: 100%;
  height: 103px;
  justify-content: space-between;
  align-items: center;
  padding: 45px 54px;
  font-family: inherit;
  font-size: 13px;

  .logo {
    font-size: 20px;
  }

  div {
    font-family: inherit;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
