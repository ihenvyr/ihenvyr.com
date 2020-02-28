import React from "react";
import Head from "next/head";
import Page from "../layouts/page";
import Container from "../components/container";
import H1 from "../components/h1";
import H2 from "../components/h2";
import DiagonalBox from "../components/diagonal-box";

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Henry Cruz 👋</title>
      </Head>

      <DiagonalBox colorA={"#212121"} colorB={"#212121"}>
        <Container>
          <div className="text-gray-300 text-center max-w-3xl mx-auto">
            <H1>Hey I'm Henry 👋</H1>
            <H2>
              <span className="text-gray-600">
                A Front-end Developer from Philippines.
                {/*I build user interfaces using React.*/}
              </span>
            </H2>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA={"#FFFFFF"} colorB={"#FFFFFF"}>
        <Container>
          <div className="text-gray-800 max-w-3xl mx-auto">
            <div className="text-center">
              <H2><strong className="block pb-2">DEV STACK</strong></H2>
            </div>

            <div className="flex text-center flex-col md:text-left md:flex-row md:justify-evenly">
              <ul className="text-xl mt-4">
                <li>Next.js</li>
                <li className="mt-3">React.js</li>
                <li className="mt-3">Express.js</li>
                <li className="mt-3">Node.js</li>
              </ul>

              <ul className="text-xl mt-4">
                <li>Javascript</li>
                <li className="mt-3">Ruby on Rails</li>
                <li className="mt-3">CSS</li>
                <li className="mt-3">HTML</li>
              </ul>
            </div>
          </div>
        </Container>
      </DiagonalBox>
    </Page>
  );
};

export default Home;