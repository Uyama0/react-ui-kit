import React, { FC } from "react";

import "./MyButton.css"

export interface MyButtonProps {
  color: string;
  medium?: boolean;
}

function MyButton({ color, medium, ...props }: MyButtonProps) {
  const rootClasses = ["my-button"]

  if (medium) {
    rootClasses.push("medium")
  }

  return (
    <div>
      <button {...props} className={rootClasses.join(" ")} style={{ color }}>
        hello
      </button>
    </div>
  );
}

export default MyButton;
