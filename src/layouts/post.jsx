import React from "react";
import "../scss/main.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Post = (props) => {
  return (
    <>
      <Header/>
      <main role="main">{props.children}</main>
      <Footer/>
    </>
  );
};

export default Post;