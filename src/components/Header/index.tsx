import React, { ReactElement } from "react";

import "./styles.css";

export default (): ReactElement => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="m-zero">The Guardian API</h1>
      </div>
    </header>
  );
};