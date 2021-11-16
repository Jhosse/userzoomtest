import React, { ReactElement, ReactNode } from "react";

import "./styles.css";

interface BodyPageContainerProps {
  children: ReactNode;
};

export default ({
  children
}: BodyPageContainerProps): ReactElement => {
  return (
    <section className="body-page-container">
      {children}
    </section>
  );
};