interface AdviceCardInterface {
    link: string, 
    text: string,
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
import { ReactComponent as Best } from "../../../assets/icons/Best.svg";
import { ReactComponent as Adv } from "../../../assets/icons/Adv.svg";
import { ReactComponent as Comedy } from "../../../assets/icons/Comedy.svg";
import { ReactComponent as Family } from "../../../assets/icons/Family.svg";
import { ReactComponent as Fant } from "../../../assets/icons/Fant.svg";
import { ReactComponent as Horror } from "../../../assets/icons/Horror.svg";
import { ReactComponent as Melo } from "../../../assets/icons/Melo.svg";
import { ReactComponent as New } from "../../../assets/icons/New.svg";



export const AdviceCardData: AdviceCardInterface[] = [
    {
        link: "",
        text: "Лучшие",
        Icon: Best,
    },
    {
        link: "",
        text: "Новые",
        Icon: New,
    },
    {
        link: "",
        text: "Мелодраммы",
        Icon: Melo,
    },
    {
        link: "",
        text: "Ужасы",
        Icon: Horror,
    },
    {
        link: "",
        text: "Приключения",
        Icon: Adv,
    },
    {
        link: "",
        text: "Фантастика",
        Icon: Fant,
    },
    {
        link: "",
        text: "Семейные",
        Icon: Family,
    },
    {
        link: "",
        text: "Комедии",
        Icon: Comedy,
    },
];