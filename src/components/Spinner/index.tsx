import React, { ReactElement } from "react";

import "./styles.css";

interface SpinnerProps {
  className?: string;
  fillColor?: string;
}

export default ({
  className,
  fillColor = "#0D7CAD"
}: SpinnerProps): ReactElement => {
  return (
    <div className={`spinner-container ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="spinner"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(30 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(60 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(90 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(120 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(150 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(180 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(210 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(240 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(270 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(300 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="47.5"
          y="25"
          rx="0"
          ry="0"
          width="5"
          height="10"
          fill={fillColor}
          transform="rotate(330 50 50)"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};
