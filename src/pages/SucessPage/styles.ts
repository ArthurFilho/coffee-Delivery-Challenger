import styled from "styled-components";

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const ContainerValue = styled.div`
    display: flex;
    margin-left: 15px;
    margin-right: 100px;
    border: 1px solid transparent;
    background: linear-gradient(#fff, #fff) padding-box ,
    linear-gradient(120deg, #DBAC2C, #4B2995) border-box;
    border-radius: 6px 36px;
    flex-direction: column;
    width: 40%;
    padding: 20px;
    gap: 15px;
    opacity: 0.9;
`

export const ContainerAllThings = styled.div`
    display: flex;
    align-items: center;
`

export const Containers = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`

export const C = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ContainerTextMain = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    display: flex;
    margin-left: 10px;
    font-weight: bold;
    display: absolute;
`

export const TextMain = styled.p`
    display: flex;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left: 10px;
    font-weight: bold;
    display: absolute;
    font-size: 50px;
    color: ${props => props.theme["gold-400"]};
`