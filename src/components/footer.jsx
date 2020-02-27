import React from "react";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <p><small>&copy; {(new Date()).getFullYear()} ihenvyr.com</small></p>
    </footer>
  );
};

export default Footer;