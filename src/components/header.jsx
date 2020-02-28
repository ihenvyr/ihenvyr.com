import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./container";

const Header = () => {
  useEffect(() => {
    Header.htmlNode = document.querySelector("html");
  }, []);

  const handleMobileMenuChange = (event) => {
    if (event.target.checked) {
      Header.htmlNode.classList.add("overflow-hidden");
      Header.htmlNode.classList.add("sm:overflow-auto");
    } else {
      Header.htmlNode.classList.remove("overflow-hidden");
      Header.htmlNode.classList.remove("sm:overflow-auto");
    }
  };

  return (
    <header className="text-gray-500 relative z-50" role="banner">
      <Container>
        <div className="flex items-center">
          <div className="mr-auto">
            <Link href="/">
              <a className="outline-none inline-block pt-6 pb-6 hover:text-gray-200">@ihenvyr</a>
            </Link>
          </div>

          <input className="absolute opacity-0 pointer-events-none" type="checkbox" id="MOBILE_MENU" onChange={handleMobileMenuChange}/>
          <label className="fixed opacity-0 pointer-events-none z-40 bg-black transition-all duration-200 ease-in-out inset-0 sm:pointer-events-none sm:opacity-0 sm:bg-transparent" htmlFor="MOBILE_MENU"/>
          <label className="cursor-pointer hover:text-gray-200 sm:absolute sm:opacity-0 sm:pointer-events-none" htmlFor="MOBILE_MENU">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </label>

          <nav className="flex flex-col absolute z-50 w-56 h-screen bg-white top-0 right-0 transition-transform duration-200 ease-in-out transform translate-x-64 sm:relative sm:bg-transparent sm:w-auto sm:h-auto sm:translate-x-0" role="navigation">
            <div className="flex sm:absolute sm:opacity-0 sm:pointer-events-none">
              <label className="cursor-pointer hover:text-gray-600 m-4" htmlFor="MOBILE_MENU">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
              </label>
            </div>
            <ul className="flex flex-col pb-4 sm:flex-row sm:pb-0">
              <li>
                <Link href="/projects">
                  <a className="outline-none block hover:bg-gray-100 pt-4 pb-4 pl-4 pr-4 sm:hover:text-gray-200 sm:hover:bg-transparent">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="outline-none block hover:bg-gray-100 pt-4 pb-4 pl-4 sm:hover:text-gray-200 sm:hover:bg-transparent">Blog</a>
                </Link>
              </li>
            </ul>
          </nav>

          {/*<div>
            <svg className="fill-current cursor-pointer ml-4" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 41c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22s8.507 19 19 19zM7 22c0-8.284 6.716-15 15-15v30c-8.284 0-15-6.716-15-15z"/>
            </svg>
          </div>*/}
        </div>
      </Container>

      {/* language=SCSS */}
      <style jsx>{`
        @media (max-width: 640px) {
          input:checked + label {
            opacity: .6;
            pointer-events: auto;
          }
          input:checked ~ nav {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;