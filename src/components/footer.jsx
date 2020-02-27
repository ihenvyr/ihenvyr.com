import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <Container>
        <p><small>&copy; {(new Date()).getFullYear()} ihenvyr.com</small></p>
      </Container>
    </footer>
  );
};

export default Footer;