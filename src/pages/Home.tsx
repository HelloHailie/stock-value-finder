import Layout from "../components/common/layout/Layout";
import Intro from "../components/stock/Intro";
import Description from "../components/stock/Description";
import Result from "../components/stock/Result";
import "../assets/css.css";

function Home() {
  return (
    <Layout
      children={
        <>
          <Intro />
          <Result />
          <Description />
        </>
      }
    />
  );
}

export default Home;
