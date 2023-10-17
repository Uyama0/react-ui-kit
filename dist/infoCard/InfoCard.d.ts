import { FC, ReactNode } from "react";
export interface InfoCardProps {
    color: string;
    children: ReactNode;
}
declare const InfoCard: FC<InfoCardProps>;
export default InfoCard;
