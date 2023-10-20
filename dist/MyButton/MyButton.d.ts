import React from "react";
import "./MyButton.css";
export interface MyButtonProps {
    color: string;
    medium?: boolean;
}
declare function MyButton({ color, medium, ...props }: MyButtonProps): React.JSX.Element;
export default MyButton;
