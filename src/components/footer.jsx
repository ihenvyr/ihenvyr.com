import React from "react";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24" role="contentinfo">
      <Container>
        <ul className="text-center mt-4">
          <li className="text-sm inline-block px-2 hover:text-gray-500 hover:underline"><a href="mailto:contact@ihenvyr.com">Email</a></li>
          <li className="text-sm inline-block px-2 hover:text-gray-500 hover:underline"><a target="_blank" rel="noopener" href="https://github.com/ihenvyr">Github</a></li>
          <li className="text-sm inline-block px-2 hover:text-gray-500 hover:underline"><a target="_blank" rel="noopener" href="https://twitter.com/ihenvyr">Twitter</a></li>
          <li className="text-sm inline-block px-2 hover:text-gray-500 hover:underline"><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/ihenvyr">LinkedIn</a></li>
          <li className="text-sm inline-block px-2 hover:text-gray-500 hover:underline"><a target="_blank" rel="noopener" href="https://codecanyon.net/user/ihenvyr">CodeCanyon</a></li>
        </ul>
        <p className="text-center pt-4 pb-8"><small>&copy; {(new Date()).getFullYear()} ihenvyr.com</small></p>
      </Container>
    </footer>
  );
};

export default Footer;