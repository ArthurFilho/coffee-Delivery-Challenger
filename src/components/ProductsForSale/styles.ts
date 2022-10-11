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
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
`
export const ItemsProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 19rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props => props.theme["gray-100"]};
    margin-left: 2rem;
    border-radius: 10px 50px 10px 10px;
`

export const ImageContainer = styled.div`
    display: flex;
`

export const TitleText = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 1rem;
`

export const DescriptionText = styled.p`
    opacity: 0.7;
    margin-bottom: 1rem;
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
    justify-content: space-between;
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
    color: ${props => props.theme["gold-400"]};
    background: ${props => props.theme["gold-100"]};
`