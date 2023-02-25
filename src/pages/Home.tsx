import Layout from "../components/common/layout/Layout";
import Intro from "../components/stock/Intro";
import Description from "../components/stock/Description";
import Demo from "../components/stock/Demo";
import "../assets/css.css";

function Home() {
  return (
    <Layout
      children={
        <>
          <Intro />
          <Demo />
          <Description />
        </>
      }
    />
  );
}

export default Home;
