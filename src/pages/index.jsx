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
              <H1>Skills</H1>
            </div>

            <div className="flex justify-evenly">
              <ul className="text-2xl mt-4">
                <li>Next.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>Node.js</li>
              </ul>

              <ul className="text-2xl mt-4">
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA={"#E0E0E0"} colorB={"#E0E0E0"}>
        <Container>
          <div className="text-gray-800 max-w-3xl mx-auto">
            <div className="text-center">
              <H1>Quick Links</H1>
            </div>

            <ul className="text-center mt-4">
              <li className="inline-block px-4"><a target="_blank" href="https://github.com/ihenvyr">Github</a></li>
              <li className="inline-block px-4"><a target="_blank" href="https://twitter.com/ihenvyr">Twitter</a></li>
              <li className="inline-block px-4"><a target="_blank" href="https://www.linkedin.com/in/ihenvyr">LinkedIn</a></li>
            </ul>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA={"#212121"} colorB={"#212121"}/>
    </Page>
  );
};

export default Home;