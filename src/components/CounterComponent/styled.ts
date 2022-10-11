import styled from "styled-components";

export const ButtonAddRemove = styled.button`
    border: 0;
    height: 20px;
    font-size: 20px;
    cursor: pointer;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["purple-400"]};
`

export const Counter = styled.div`
    display: flex;
    gap: 10px;
    background: ${props => props.theme["gray-400"]};
`