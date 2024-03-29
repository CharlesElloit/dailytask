import React from "react";

function Plus({ width, height, color, ...props }) {
  return (
    <svg
      {...{ width, height }}
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.69231V8.30769H8.30769V0H9.69231V8.30769H18V9.69231H9.69231V18H8.30769V9.69231H0Z"
        fill={color}
      />
    </svg>
  );
}

export default Plus;
