// const test = {};

// export default test;


import styled from "styled-components";

export const sidebar_data_item =styled.button`
    width: 100%;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    & p{
        flex: 1;
        margin: 0;
        text-align: left;
    }
`;
export const selector =styled.div`
    width: 30px;
    height: 18px;
    border-radius: 10px 0px 0px 10px;
    background: transparent;
    transform: translateX(100%);
    transition: .25s;
    `;


// .active .selector{
//     width: 30px;
//     height: 18px;
//     border-radius: 10px 0px 0px 10px;
//     transform: translateX(0%);
//     background: #29A19C;
// }


