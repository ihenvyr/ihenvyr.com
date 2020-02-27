import React from "react";

const H1 = (props) => {
  return (
    <h1 className="text-4xl font-bold">{props.children}</h1>
  );
};

export default H1;