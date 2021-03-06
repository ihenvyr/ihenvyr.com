import React from "react";
import "../scss/main.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = (props) => {
  return (
    <>
      <Header/>
      <main role="main">{props.children}</main>
      <Footer/>
    </>
  );
};

export default Page;