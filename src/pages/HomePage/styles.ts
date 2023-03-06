import styled from "styled-components";

export const ContainerMainPage = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

export const MainImage = styled.div`
    display: flex;
`

export const TextContainer = styled.div`
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainText = styled.p`
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: left;
`

export const SubText = styled.p`
    font-size: 20px;
    text-align: left;
    margin-bottom: 1.5rem;
`

export const ContainerIcons = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 50px;
    display: flex;
    align-items: center;
`

export const TextIcons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 1rem;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            margin-bottom: 15px;
        }
`

export const ContainerAllThings = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
