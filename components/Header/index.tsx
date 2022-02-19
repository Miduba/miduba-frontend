import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "components/Button";
import React, { ReactElement, useRef, useState } from "react";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
import { IoMdArrowDropdown as ArrowDownIcon } from "react-icons/io";
import { ImCross as CrossIcon } from "react-icons/im";
import { useToggle } from "react-use";
import { useEffect } from "react";

export default function Header(): ReactElement {
  const [on, toggle] = useToggle(false);
  const [searchCriteria, setSearchCriteria] = useState("채용");
  const menuRef = useRef<any>();

  const onMenuButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchCriteria((e.target as HTMLElement).innerText);
    toggle(false);
  };

  const onClickOutside = (e: { target: HTMLElement }) => {
    if (menuRef.current !== null && !menuRef?.current?.contains(e.target)) {
      toggle(false);
    }
  };

  // dropdown 외 영역 클릭 시
  useEffect(() => {
    const onClickOutside = (e: CustomEvent<MouseEvent>) => {
      if (menuRef.current !== null && !menuRef?.current?.contains(e.target)) {
        toggle(false);
      }
    };
    if (on) {
      window.addEventListener("click", onClickOutside as EventListener);
    }

    return () => {
      window.removeEventListener("click", onClickOutside as EventListener);
    };
  }, [on, toggle]);

  return (
    <HeaderSection>
      {/* @Todo 임시 로고 자리  */}
      <InnerContainer>
        <div className="logo">Miduba</div>
        <SearchBox>
          <Dropdown>
            <HeaderButton
              width="88px"
              height="40px"
              onClick={() => {
                toggle(!on);
              }}
            >
              {searchCriteria}
              <ArrowDownIcon size={24} />
            </HeaderButton>
            <div
              ref={menuRef}
              className="dropdowMenu"
              css={css`
                display: ${on ? "block" : "none"};
              `}
            >
              {["채용1", "채용2", "채용3"].map((v: string, i: number) => (
                <HeaderButton
                  width="88px"
                  height="40px"
                  onClick={onMenuButton}
                  key={i}
                >
                  {v}
                </HeaderButton>
              ))}
            </div>
          </Dropdown>
          <input type="text" className="leftside" />
          <input type="text" className="rightside" />
          <HeaderButton width="40px" height="40px">
            <SearchIcon size={40} />
          </HeaderButton>
        </SearchBox>
        <HeaderButton width="fit-content" height="40px">
          회원가입
        </HeaderButton>
        <HeaderButton width="fit-content" height="40px" margin-left="20px">
          로그인
        </HeaderButton>
      </InnerContainer>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 96px;
  padding: 0 40px;
  border: 1px solid black;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  height: 96px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled(Button)`
  border-color: transparent;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: blue; // @Todo 임시
  }
`;

const Dropdown = styled.div`
  width: 88px;
  height: 40px;
  border-right: 1px solid black; // @Todo 임시
`;

const SearchBox = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  background: gray; // @Todo 임시
  border-radius: 4px;

  input {
    width: calc((100% - 88px - 40px) / 2);
    height: 35px;
    background: gray;
    border: none;
    border-right: 1px solid black;

    &:focus {
      outline: none;
    }
  }
`;
