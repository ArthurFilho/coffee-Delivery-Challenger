import styled from "styled-components";

export const ContainerBanana = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 300px;
    width: 50%;
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 10px;
    background: ${props => props.theme["gray-100"]};
    

    input{
        width: 95%;
        display: flex;
    }
`

export const ContainerPayment = styled.div`
    background: ${props => props.theme["gray-100"]};
    width: 50%;
`

export const ContainerSelection = styled.div`

`

export const Text = styled.p`
    display: flex;
    margin-left: 10px;
    font-weight: bold;
`

