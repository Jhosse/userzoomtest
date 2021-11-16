import React, { ReactElement, ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

interface PageContainerProps {
  children: ReactNode;
};

export default ({
  children
}: PageContainerProps): ReactElement => {
  return (
    <main className="page-container">
      <Header />
      {children}
      <Footer />
    </main>
  );
};