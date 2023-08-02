/* eslint-disable max-lines */
import styled from "styled-components";




export const modal_title = styled.div`
`;
export const modal_task_name = styled.div`
`;
export const modal_parameters = styled.div`
`;
export const modal_button = styled.div`
`;
export const modal_category = styled.div`
`;

export const modal_base = styled.div<{display:string}>`
top: 0;
bottom: 0;
left: 0;
right: 0;
position: fixed;
background-color: rgba(0, 0, 0, 0.205);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
display:${props=>props.display};
`; 

export const modal_window = styled.div`
    width: 350px;
    padding: 20px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 25px 0px rgba(29, 52, 54, 0.08);
    display: flex;
    flex-direction: column;
    gap: 30px;
    box-sizing: border-box;
    & p {
        margin: 0;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.28px;
    }

    & input, select {
        border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 8px 15px;
    }
    & ${modal_title} {
            display: flex;
            flex-direction: row;
            gap: 20px;
            & p {
                color:#29A19C;
                    font-size: 20px;
                    letter-spacing: 0.4px;
            }
         }
         & select {
            padding: 5px 15px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.24px;
        width: 160px;
         }

         & ${modal_task_name}{
                display: flex;
                flex-direction: column;
                gap: 10px;
         }
    & ${modal_parameters}{
        display: flex;
        flex-direction: row;
        gap: 30px;

        & div ,select{
            width: 100%
        }
        & input {
            width: 82%
        }
    }

    & ${modal_button}{
        display: flex;
        justify-content: space-between;
        }
    & ${modal_category}{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

// export const button = styled.button`

// padding: 10px 25px;

// `;



