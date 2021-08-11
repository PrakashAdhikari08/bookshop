import React from "react";
import {Div} from "./loader.style";

const PageLoader: React.FC = () => {
  return (
    <Div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Div>
  );
};

export default PageLoader;
