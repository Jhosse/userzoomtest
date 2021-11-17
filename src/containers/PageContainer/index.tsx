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
    <>
      <main className="page-container">
        <Header />
        {children}
      </main>
      {/**
       * - Footer outside main to fix it to the bottom of the page,
       * - that's the quickest fix but in reality it should be fixed 
       * - properly and avoid breaking the semantic markup.
       */}
      <Footer />
    </>
  );
};