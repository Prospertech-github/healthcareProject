import React from "react";

export default function Buttons({ text, nav }) {
  return (
    <button
      className={`bg-white text-foreground py-4 px-2 rounded-lg font-[500] lg:w-fit ${
        nav ? "w-[80%]" : ""
      }`}
    >
      {text}
    </button>
  );
}
