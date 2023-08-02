export const headerRoute: Route[] = [
    {text: "Главная", link: "/artemLeskin/"},
    {text: "Фильмы", link: "/artemLeskin/list/movie"},
    {text: "Сериалы", link: "/artemLeskin/list/series"},
    {text: "Добавить", link: "/artemLeskin/create"},
];

interface Route {
    link: string;
    text: string;
}