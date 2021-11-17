import React, { ReactElement } from "react";

interface ArrowDropdownProps {
  className?: string;
}

export default ({ className }: ArrowDropdownProps): ReactElement => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#0D7CAD"
        d="M9.758 12.742l2.158-2.159c.078-.077.139-.168.18-.27.043-.1.064-.208.064-.317 0-.11-.021-.217-.063-.318-.042-.101-.103-.193-.18-.27L9.757 7.25c-.525-.517-1.425-.15-1.425.592v4.308c0 .75.9 1.117 1.425.592z"
      />
    </svg>
  );
};
