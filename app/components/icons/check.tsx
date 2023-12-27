import React from "react";

const Check: React.FunctionComponent = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M18.24 7.76a.75.75 0 010 1.06l-7.42 7.42a.75.75 0 01-1.06.001l-3.54-3.53a.75.75 0 011.06-1.062l3.01 3.001 6.89-6.89a.75.75 0 011.06 0z"
      />
    </svg>
  );
};

export default Check;
