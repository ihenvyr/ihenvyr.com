import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="bg-gray-100" role="banner">
      <Container>
        <div className="flex items-center">
          <div className="mr-auto">
            <Link href="/">
              <a className="inline-block pt-4 pb-4 hover:underline">&lt;Home/&gt;</a>
            </Link>
          </div>

          <nav className="flex" role="navigation">
            <ul className="flex">
              <li>
                <Link href="/about">
                  <a className="inline-block pt-4 pb-4 pl-4 pr-4 hover:underline">About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="inline-block pt-4 pb-4 pl-4 pr-4 hover:underline">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="inline-block pt-4 pb-4 pl-4 pr-4 hover:underline">Blog</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <svg className="fill-current cursor-pointer ml-4 mr-4" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 41c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22s8.507 19 19 19zM7 22c0-8.284 6.716-15 15-15v30c-8.284 0-15-6.716-15-15z"/>
            </svg>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;