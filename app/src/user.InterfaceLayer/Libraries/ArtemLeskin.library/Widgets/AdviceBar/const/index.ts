import { AdviceCardInterface } from "../type/index";
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
        value: "",
        text: "Лучшие",
        Icon: Best,
    },
    {
        value: "",
        text: "Новые",
        Icon: New,
    },
    {
        value: "4",
        text: "Мелодраммы",
        Icon: Melo,
    },
    {
        value: "1",
        text: "Ужасы",
        Icon: Horror,
    },
    {
        value: "8",
        text: "Приключения",
        Icon: Adv,
    },
    {
        value: "6",
        text: "Фантастика",
        Icon: Fant,
    },
    {
        value: "9",
        text: "Семейные",
        Icon: Family,
    },
    {
        value: "10",
        text: "Комедии",
        Icon: Comedy,
    },
];