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
    padding-right: 10px;
    background: ${props => props.theme["gray-100"]};
    

    input{
        display: flex;
        border-radius: 5px;
        height: 42px;
        padding-left: 5px;
        border: 0;
        background: ${props => props.theme["gray-300"]};
    }
`

export const ContainerPayment = styled.div`
   background: ${props => props.theme["gray-100"]};
`

export const ContainerSelection = styled.div`
    background: ${props => props.theme["gray-100"]};
    width: 50%;
`

export const Text = styled.p`
    display: flex;
    margin-left: 10px;
    font-weight: bold;
`

export const InputCep = styled.input`
    width: 200px;
`

export const InputRua = styled.input`
    width: 100%;
`

export const ContainerInput = styled.div`
    display: flex;
    gap: 10px;
`

export const InputNumber = styled.input`
    width: 70%;
`

export const InputComplemento = styled.input`
    width: 100%;
`

export const InputBairro = styled.input`
    width: 40%;
`

export const InputCidade = styled.input`
    width: 30%;
`

export const InputUF = styled.input`
    width: 30%;
`