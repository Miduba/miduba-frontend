import Button from "components/Button";
import Footer from "components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
