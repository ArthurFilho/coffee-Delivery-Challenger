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
   margin-left: 15px;
   margin-top: 15px;
   flex-direction: column;
   display: flex;
   height: 140px;
   margin-right: 15px;
   width: 550px;
`

export const ContainerSelection = styled.div`
    background: ${props => props.theme["gray-100"]};
    width: 50%;
    margin-right: 15px;
    display: flex;
    border-radius: 10px 50px 10px 10px;

`

export const Text = styled.p`
    display: flex;
    margin-left: 10px;
    font-weight: bold;
    margin-bottom: 30px;
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

export const ButtonsPayment = styled.button`
    background: ${props => props.theme["gray-500"]};
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 51px;
    gap: 7.5px;
    padding: 15px;
`

export const BoxPayment = styled.div`
    display: flex;
    gap: 10px;
    padding-left: 20px;
`

export const BoxTextPayment = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h3{
        display: flex;
        align-items: center;
    }

    p{
        padding-left: 20px;
    }
`

export const BoxSelection = styled.div`
    flex-direction: column;
    display: flex;
`

export const ButtonsSelection = styled.button`
    background: ${props => props.theme["gray-400"]};
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 31px;
    gap: 7.5px;
    padding: 4px;
`

export const PurchasedProducts = styled.div`
    display: flex;
`

export const TextValueContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextValue = styled.div`
    display: flex;
    justify-content: space-between;
`