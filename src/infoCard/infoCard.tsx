import React, { FC, ReactNode } from "react";

export interface InfoCardProps {
  color: string;
  children: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ children, color, ...props }) => {
  return (
    <div {...props} style={{ color }}>
      {children}
    </div>
  );
};

export default InfoCard;
