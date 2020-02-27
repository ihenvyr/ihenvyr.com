import React from "react";
import Head from "next/head";
import Page from "../layouts/page";
import Container from "../components/container";
import H1 from "../components/h1";

const Projects = () => {
  return (
    <Page>
      <Head>
        <title>Projects - Henry Cruz</title>
      </Head>

      <Container>
        <H1>Projects</H1>
      </Container>
    </Page>
  );
};

export default Projects;