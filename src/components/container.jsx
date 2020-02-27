import React from "react";

const Container = (props) => {
  return (
    <div className="container ml-auto mr-auto pl-6 pr-6">
      {props.children}
    </div>
  );
};

export default Container;