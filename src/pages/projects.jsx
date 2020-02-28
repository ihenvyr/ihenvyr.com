import React from "react";
import Head from "next/head";
import Page from "../layouts/page";
import Container from "../components/container";
import H1 from "../components/h1";
import DiagonalBox from "../components/diagonal-box";
import H2 from "../components/h2";

const Projects = () => {
  return (
    <Page>
      <Head>
        <title>Projects - Henry Cruz</title>
      </Head>

      <DiagonalBox colorA={"#212121"} colorB={"#212121"}>
        <Container>
          <div className="text-gray-300 text-center max-w-3xl mx-auto">
            <H1>Projects</H1>
            <H2>
              <span className="text-gray-600">
                Open-source and side hustle
              </span>
            </H2>
          </div>
        </Container>
      </DiagonalBox>

      <DiagonalBox colorA={"#FFFFFF"} colorB={"#FFFFFF"}>
        <Container>
          <div className="text-gray-800 max-w-3xl mx-auto">
            <div className="flex justify-evenly flex-col md:flex-row">
              <ul className="text-xl">
                <li>
                  <a className="hover:underline" target="_blank" href="https://imageminifier.com/">ImageMinifier</a>
                  <div className="text-base text-gray-500">Compress and resize JPG or PNG images</div>
                </li>
                <li className="mt-4">
                  <a className="hover:underline" target="_blank" href="https://github.com/ihenvyr/react-styled-grid">react-styled-grid</a>
                  <div className="text-base text-gray-500">Responsive fluid grid system</div>
                </li>
              </ul>

              <ul className="text-xl mt-4 md:mt-0">
                <li>
                  <a className="hover:underline" target="_blank" href="https://codecanyon.net/item/loki-pricing-table-generator/22536551">Loki Pricing Table Generator</a>
                  <div className="text-base text-gray-500">CodeCanyon item</div>
                </li>
                <li className="mt-4">
                  <a className="hover:underline" target="_blank" href="https://codecanyon.net/item/monaka-responsive-menu/25551352">Monaka Responsive Menu</a>
                  <div className="text-base text-gray-500">CodeCanyon item</div>
                </li>
                <li className="mt-4">
                  <a className="hover:underline" target="_blank" href="https://codecanyon.net/item/loki-header-menu-generator/22839687">Loki Header Menu Generator</a>
                  <div className="text-base text-gray-500">CodeCanyon item</div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </DiagonalBox>
    </Page>
  );
};

export default Projects;