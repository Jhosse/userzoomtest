import React, { ReactElement } from "react";

import "./styles.css";

const GUARDIAN_PLATFORM = "https://open-platform.theguardian.com/";

export default (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Powered by&nbsp;
          <a href={GUARDIAN_PLATFORM} className="footer-link" target="_blank">
            The Guardian Open Platform
          </a>
        </p>
      </div>
    </footer>
  );
};