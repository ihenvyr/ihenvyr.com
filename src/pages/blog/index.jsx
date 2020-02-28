import React from "react";
import Head from "next/head";
import Link from "next/link";
import Page from "../../layouts/page";
import Container from "../../components/container";
import H1 from "../../components/h1";
import DiagonalBox from "../../components/diagonal-box";
import H2 from "../../components/h2";

const Blog = () => {
  return (
    <Page>
      <Head>
        <title>Blog - Henry Cruz</title>
      </Head>

      <DiagonalBox colorA={"#212121"} colorB={"#212121"}>
        <Container>
          <div className="text-gray-300 text-center max-w-3xl mx-auto">
            <H1>Blog</H1>
            <H2>
              <span className="text-gray-600">
                Random dev posts
              </span>
            </H2>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA={"#FFFFFF"} colorB={"#FFFFFF"}>
        <Container>
          <div className="text-gray-800 max-w-3xl mx-auto">
            <div className="flex text-center flex-col md:text-left md:flex-row md:justify-evenly">
              <ul className="text-xl">
                <li>
                  <Link href="/blog/hello-world"><a className="hover:underline">Hello World</a></Link>
                  <div className="text-base text-gray-500">2020-02-28</div>
                </li>
                <li className="mt-4">
                  <Link href="/blog/hello-world"><a className="hover:underline">Hello World</a></Link>
                  <div className="text-base text-gray-500">2020-02-28</div>
                </li>
              </ul>

              <ul className="text-xl mt-4 md:mt-0">
                <li>
                  <Link href="/blog/hello-world"><a className="hover:underline">Hello World</a></Link>
                  <div className="text-base text-gray-500">2020-02-28</div>
                </li>
                <li className="mt-4">
                  <Link href="/blog/hello-world"><a className="hover:underline">Hello World</a></Link>
                  <div className="text-base text-gray-500">2020-02-28</div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </DiagonalBox>
    </Page>
  );
};

export default Blog;