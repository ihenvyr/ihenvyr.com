import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24" role="contentinfo">
      <Container>
        <ul className="text-center mt-4">
          <li className="inline-block px-4"><a target="_blank" href="https://github.com/ihenvyr">Github</a></li>
          <li className="inline-block px-4"><a target="_blank" href="https://twitter.com/ihenvyr">Twitter</a></li>
          <li className="inline-block px-4"><a target="_blank" href="https://www.linkedin.com/in/ihenvyr">LinkedIn</a></li>
        </ul>
        <p className="text-center pt-4 pb-8"><small>&copy; {(new Date()).getFullYear()} ihenvyr.com</small></p>
      </Container>
    </footer>
  );
};

export default Footer;