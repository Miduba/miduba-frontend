import styled from "@emotion/styled";
import Button from "components/Button";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import type { NextPage } from "next";
import media from "styles/media";

const Home: NextPage = () => {
  return (
    <Test>
      <Header />
      <Sidebar />
      <main>
        Home
        <Button
          width="130px"
          height="30px"
          buttonColor="primaryDark"
          fontColor="white"
        >
          Hello
        </Button>
      </main>
    </Test>
  );
};

// @Note 아래는 반응형 예시 코드 입니다 확인 후 삭제해주세요~
const Test = styled.div`
  background-color: red;
  ${media.xlarge} {
    background-color: blue;
  }
  ${media.large} {
    background-color: green;
  }
  ${media.medium} {
    background-color: yellow;
  }
`;

export default Home;
