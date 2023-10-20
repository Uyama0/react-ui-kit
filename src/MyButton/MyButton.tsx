import React, { FC } from "react";

export interface MyButtonProps {
  color: string;
}

function MyButton({ color, ...props }: MyButtonProps) {
  return (
    <button {...props} style={{ color }}>
      hello
    </button>
  );
}

export default MyButton;
