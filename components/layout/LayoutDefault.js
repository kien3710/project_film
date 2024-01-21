import React from "react";
import Header from "../header";
import Footer from "../footer";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutDefault;
