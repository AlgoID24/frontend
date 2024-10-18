import AppLayout from "@/components/layouts/app";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
