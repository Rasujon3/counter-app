import React, { Children } from "react";

const Button = ({ children, handler }) => {
  return (
    <div>
      <button
        onClick={handler}
        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
