// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC } from "react";
import {styled} from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ITypographyProps from "./type";

type CleanTagProps = {
    as?: keyof JSX.IntrinsicElements;
} & ITypographyProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CleanTag: FC<CleanTagProps> = ({as: Tag = "h1",...rest}) => {
    return <Tag/>;
};
/**
 * Компонент Typography для отображения текста с заданными стилями.
 * @param {Object} props - Пропсы компонента Typography.
 * @param {string} [props.as="h1"] - Тег элемента, который будет использован для отображения текста.
 * @param {string} [props.family] - Семейство шрифта.
 * @param {number} [props.size] - Размер шрифта.
 * @param {string} [props.color] - Цвет текста.
 * @param {number} [props.weight] - Толщина шрифта (жирность).
 * @return {JSX.Element} - Возвращает элемент с заданным текстом и стилями.
 */
const Typography = styled(CleanTag)<CleanTagProps>((props) => ({
    fontSize: props.size,
    fontWeight: props.weight,
    fontFamily: props.family,
    color: props.color,
    // Другие стили, которые вам нужны для вашего Typography
}));

export default Typography;