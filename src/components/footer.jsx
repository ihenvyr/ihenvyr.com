import React from "react";
import Container from "./container";
import DiagonalBox from "./diagonal-box";

const Footer = () => {
  return (
    <footer className="bg-gray-900" role="contentinfo">
      <Container>
        <p className="text-center p-8"><small>&copy; {(new Date()).getFullYear()} ihenvyr.com</small></p>
      </Container>
    </footer>
  );
};

export default Footer;