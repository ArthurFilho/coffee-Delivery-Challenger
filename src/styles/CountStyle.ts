import styled from "styled-components";

export const ButtonAddRemove = styled.div`
    border: 0;
    height: 20px;
    font-size: 20px;
    cursor: pointer;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["purple-400"]};
`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    gap: 10px;
    background: ${props => props.theme["gray-400"]};
    height: 30px;
    padding: 5px;
`

export const ButtonDisabled = styled.button`
    border: 0;
    height: 20px;
    font-size: 20px;
    cursor: pointer;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["purple-400"]};
    opacity: 0.3;
`;