import { ReactNode } from "react";

export interface AdviceCardProps {
    link: string;
    text: string;
    children: ReactNode;
    func: any
}