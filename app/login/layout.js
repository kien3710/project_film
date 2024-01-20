import LoginLayout from "@/components/layout/LoginLayout";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <LoginLayout>{children}</LoginLayout>
    </>
  );
};

export default Layout;
