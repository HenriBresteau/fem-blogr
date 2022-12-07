import React from "react";

const Button = ({ label, full }) => {
  const isFull = full
    ? " border-2 border-white rounded-full bg-btn-gradient text-white hover:text-footerBg"
    : null;

  return (
    <button
      className={`px-10 py-2 text-xl font-ubuntu font-medium w-fit cursor-pointer hover:text-footer ${isFull}`}
    >
      {label}
    </button>
  );
};

export default Button;
