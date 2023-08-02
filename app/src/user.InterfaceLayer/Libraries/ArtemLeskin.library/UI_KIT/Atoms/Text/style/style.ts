import { styled } from "styled-components";

import { ITextInterface } from "../type/index";

export const Text = styled.p<ITextInterface>`
    text-align: ${(props) => (props.align)};
    color: ${(props) => (props.theme)};
    font-size: ${(props) => (props.size)};
`;

export const Title = styled.p<ITextInterface>`
    text-align: ${(props) => (props.align)};
    color: ${(props) => (props.theme)};
    font-size: ${(props) => (props.size)};
`;

export const Container = styled.div`

`;