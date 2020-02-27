import React from "react";
import Head from "next/head";
import Link from "next/link";
import Page from "../../layouts/page";
import Container from "../../components/container";
import H1 from "../../components/h1";

const Blog = () => {
  return (
    <Page>
      <Head>
        <title>Blog - Henry Cruz</title>
      </Head>

      <Container>
        <H1>Blog</H1>

        <ol>
          <li><Link href="/blog/hello-world"><a>Hello World</a></Link></li>
        </ol>
      </Container>
    </Page>
  );
};

export default Blog;