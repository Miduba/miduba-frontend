import Button from "components/Button";
import Header from "components/Header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        Home
        <Button width="130px" height="30px">
          Hello
        </Button>
      </main>
    </>
  );
};

export default Home;
