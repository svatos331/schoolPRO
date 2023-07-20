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
        link: "/artemLeskin/list/movie",
        text: "Лучшие",
        Icon: Best,
    },
    {
        link: "/artemLeskin/list/movie",
        text: "Новые",
        Icon: New,
    },
    {
        link: "/artemLeskin/list/movie&4",
        text: "Мелодраммы",
        Icon: Melo,
    },
    {
        link: "/artemLeskin/list/movie&1",
        text: "Ужасы",
        Icon: Horror,
    },
    {
        link: "/artemLeskin/list/movie&8",
        text: "Приключения",
        Icon: Adv,
    },
    {
        link: "/artemLeskin/list/movie&6",
        text: "Фантастика",
        Icon: Fant,
    },
    {
        link: "/artemLeskin/list/movie&9",
        text: "Семейные",
        Icon: Family,
    },
    {
        link: "/artemLeskin/list/movie&10",
        text: "Комедии",
        Icon: Comedy,
    },
];