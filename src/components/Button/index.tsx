import React, { ReactElement } from "react";

import "./styles.css";

export enum ButtonVersion {
  Primary,
  Secondary,
}

interface ButtonProps {
  content: string;
  action: () => void;
  version?: ButtonVersion;
  className?: string;
  isDisabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export default ({
  content,
  action,
  version = ButtonVersion.Primary,
  className,
  isDisabled = false,
  type = "button"
}: ButtonProps): ReactElement => {

  const handleOnClick = () => action();

  const handleVersion = (): string => {
    return version === ButtonVersion.Primary ? "primary" : "secondary";
  }

  return (
    <button
      type={type}
      className={`button ${className} ${handleVersion()}`}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};