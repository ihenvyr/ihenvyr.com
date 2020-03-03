import React from "react";
import Head from "next/head";
import Page from "../layouts/page";
import Container from "../components/container";
import DiagonalBox from "../components/diagonal-box";
import H1 from "../components/h1";
import H2 from "../components/h2";

function Error({ statusCode }) {
  return (
    <Page>
      <Head>
        <title>Ooopps 😱 - Henry Cruz</title>
      </Head>

      <DiagonalBox colorA={"#212121"} colorB={"#212121"}>
        <Container>
          <div className="text-gray-300 text-center max-w-3xl mx-auto">
            <H1>Ooopps 😱</H1>
            <H2>
              <span className="text-gray-600">
                Sorry, we can't find what you’re looking for.
              </span>
            </H2>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA="#FFFFFF" colorB="#FFFFFF">
        <Container>
          <div className="flex items-center justify-center text-6xl font-bold" style={{ minHeight: "25vh" }}>404 Error</div>
        </Container>
      </DiagonalBox>
    </Page>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
};

export default Error