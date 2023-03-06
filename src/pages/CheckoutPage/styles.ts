import styled from "styled-components";

import * as RadioGroup from "@radix-ui/react-radio-group";

export const ContainerAllThings = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BodyPage = styled.form`
    display: flex;
    width: 100%;
`

export const ContainerBanana= styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
`

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    height: 300px;
    width: 65%;
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 10px;
    padding-right: 10px;
    background: ${props => props.theme["gray-100"]};
    
    h3 {
        display: flex;
        align-items: center;
    }

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
   align-items: center;
   flex-direction: column;
   display: flex;
   height: 180px;
   margin-right: 15px;
   width: 65%;
   margin-bottom: 15px;
   padding: 10px;
   div {
    width: 100%;
   }
`

export const ContainerSelection = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 10px 50px 10px 10px;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-right: 100px;
`

export const CoffeesSelected = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme["gray-100"]};
`

export const Text = styled.p`
    display: flex;
    font-weight: bold;
    margin-bottom: 30px;
`

export const InputCep = styled.input`
    width: 60%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const InputRua = styled.input`
    width: 100%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 10px;
        div {
            display: flex;
            width: 100%;
            gap: 10px;
        }
`

export const InputNumber = styled.input`
    width: 50%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const InputComplemento = styled.input`
    width: 50%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const InputBairro = styled.input`
    width: 50%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const InputCidade = styled.input`
    width: 30%;
    &:disabled {
        cursor: not-allowed;
    }
    
`

export const InputUF = styled.input`
    width: 20%;
    &:disabled {
        cursor: not-allowed;
    }
`

export const ButtonsPayment = styled(RadioGroup.Item)`
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-600"]};
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 51px;
    gap: 7.5px;
    padding: 15px;
    border-radius: 10px;

    img{
        opacity: 0.5;
    }
    
    &:disabled {
        cursor: not-allowed;
    }

    &[data-state='checked'] {
        background: ${props => props.theme["purple-100"]};
        color: ${props => props.theme["gray-900"]};
        border: 1px solid ${props => props.theme["purple-400"]};
        
    img {
        opacity: 1;
    }

    }
`

export const BoxPayment = styled(RadioGroup.Root)`
    display: flex;
    gap: 10px;
    padding-left: 20px;
`

export const BoxTextPayment = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 15px;

    h3{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    p{
        padding-left: 20px;
    }
`

export const BoxSelection = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 30px;
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
    border: 0;
`

export const PurchasedProducts = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 400px;
    gap: 20px;
`

export const TextValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
`

export const TextValue = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`

export const ButtonsConfirm = styled.button`
    background: ${props => props.theme["gold-200"]};
    color:  ${(props) => props.theme.white};
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 31px;
    gap: 7.5px;
    padding: 4px;
    border: 0;
    margin-bottom: 30px;

    &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
    }
`

export const Title = styled.p`
    display: flex;
`

export const TextNoCoffee = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const ContainerTextMain = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
`

export const ContainerTextMainInside = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    h3{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    p{
        padding-left: 20px;
    }
`