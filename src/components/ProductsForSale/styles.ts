import styled from "styled-components";

export const ContainerAllThings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerProducts = styled.div`
    display: flex;
`

export const HeaderText = styled.h1`
    width: 80%;
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
    width: 20%;
    height: 25rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props => props.theme["gray-100"]};
    border-radius: 10px 50px 10px 10px;
    margin-bottom: 2rem;
    
        span {
            font-size: 20px;
        }
`

export const ImageContainer = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
    margin-bottom: 25px;
`

export const TitleText = styled.h1`
    display: flex;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 25px;
`

export const DescriptionText = styled.p`
    display: flex;
    opacity: 0.7;
    margin-bottom: 1rem;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 25px;
    text-align: center;
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

export const CartIcon = styled.div`
    border: 0;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const TypeCoffeeText = styled.p`
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
    color: ${props => props.theme["gold-400"]};
    text-align: center;
    border-radius: 5px;
    p {
        padding: 5px;
        border-radius: 5px;
        background: ${props => props.theme["gold-100"]};
    }
`

export const ButtonAdd = styled.button`
    border: none;
    
`