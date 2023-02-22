import Layout from "../components/common/layout/Layout";
import Intro from "../components/stock/Intro";
import Description from "../components/stock/Description";
import "../assets/css.css";

function Home() {
  return (
    <Layout
      children={
        <>
          <Intro />
          <Description />
        </>
      }
    />
  );
}

export default Home;
