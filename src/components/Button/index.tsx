import React, { ReactElement } from "react";

import "./styles.css";

interface ButtonProps {
  content: string;
  action: () => void;
  className?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export default ({
  content,
  action,
  className,
  isDisabled = false,
  type = "button"
}: ButtonProps): ReactElement => {

  const handleOnClick = () => action();

  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};