import { ReactNode } from "react";

export interface AdviceCardProps {
    text: string;
    value: string;
    children: ReactNode;
    func: any;
    changeGanre: (value: string) => void
}