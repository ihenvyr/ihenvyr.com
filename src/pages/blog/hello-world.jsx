import React from "react";
import Head from "next/head";
import Post from "../../layouts/post";
import Container from "../../components/container";
import H1 from "../../components/h1";

const HelloWorld = () => {
  return (
    <Post>
      <Head>
        <title>Hello World - Blog</title>
      </Head>

      <Container>
        <H1>Hello World!</H1>
      </Container>
    </Post>
  );
};

export default HelloWorld;