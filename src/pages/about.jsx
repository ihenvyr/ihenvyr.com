import React from "react";
import Head from "next/head";
import Page from "../layouts/page";
import Container from "../components/container";
import H1 from "../components/h1";

const Home = () => {
  return (
    <Page>
      <Head>
        <title>About - Henry Cruz</title>
      </Head>

      <Container>
        <H1>About</H1>
      </Container>
    </Page>
  );
};

export default Home;