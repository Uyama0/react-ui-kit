import React from "react";
export interface MyButtonProps {
    color: string;
}
declare function MyButton({ color, ...props }: MyButtonProps): React.JSX.Element;
export default MyButton;
