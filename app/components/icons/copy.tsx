import React from "react";

const Copy: React.FunctionComponent = (props) => {
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
        d="M9.6 4.50999C8.85442 4.50999 8.25 5.11441 8.25 5.85999V15.41C8.25 16.1556 8.85441 16.76 9.6 16.76H17.15C17.8956 16.76 18.5 16.1556 18.5 15.41V5.85999C18.5 5.11441 17.8956 4.50999 17.15 4.50999H9.6ZM9.75 15.26V6.00999H17V15.26H9.75Z"
      />
      <path
        fill="currentColor"
        d="M7 8.58999C7 8.17578 6.66421 7.83999 6.25 7.83999C5.83579 7.83999 5.5 8.17578 5.5 8.58999V18.14C5.5 18.498 5.64223 18.8414 5.8954 19.0946C6.14858 19.3478 6.49196 19.49 6.85 19.49H14.4C14.8142 19.49 15.15 19.1542 15.15 18.74C15.15 18.3258 14.8142 17.99 14.4 17.99H7V8.58999Z"
      />
    </svg>
  );
};

export default Copy;
