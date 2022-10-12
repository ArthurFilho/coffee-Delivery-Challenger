import styled from "styled-components";

export const ContainerProducts = styled.div`
    display: flex;
`

export const HeaderText = styled.h1`
    margin-left: 1rem;
    text-align: left;
    margin-bottom: 2rem;
`

export const ContainerItemsProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    padding: 10px;
`
export const ItemsProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 24rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props => props.theme["gray-100"]};
    border-radius: 10px 50px 10px 10px;
    margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
`

export const TitleText = styled.h1`
    display: flex;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 4px;
    
`

export const DescriptionText = styled.p`
    display: flex;
    opacity: 0.7;
    margin-bottom: 1rem;
    text-align: center;
    padding-left: 10px;
`

export const PriceProductsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const BoxItems = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const CartIcon = styled.button`
    border: 0;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const TypeCoffeText = styled.p`
    display: flex;
    margin-bottom: 2rem;
    color: ${props => props.theme["gold-400"]};
    background: ${props => props.theme["gold-100"]};
    text-align: center;
`