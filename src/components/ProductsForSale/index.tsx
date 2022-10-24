import { BoxItems, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { ContainerCounter } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";

import Cart from "../../assets/ProductsForSale/Cart.svg"
import { useContext } from "react";
import { ContextContents} from "../../context/Context";

interface CoffeeProps {
    id: number | string
    description: string
    type: string
    price: number
    title: string
    image: void
  } 

export function ProductsForSale(){
    
    const { response , ProductInformation } = useContext(ContextContents)
    
    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                {response.map((response:CoffeeProps)=> {
                    return(
                    <ItemsProduct> 

                    <ImageContainer> <img src={response.image}/> </ImageContainer>
                  
                      <TypeCoffeText>{response.title}</TypeCoffeText>
                  
                      <TitleText>{response.type}</TitleText> 
  
                      <DescriptionText>{response.description}</DescriptionText>
                      
                      <PriceProductsContainer> 
                          
                          <span>{priceFormatter.format(response.price)}</span> 
                          
                          <BoxItems>  
                              
                              <ContainerCounter />
                            
                            <button  id={response.id}>
                              <CartIcon> 
                              
                                  <img src={Cart} /> 
                                  
                              </CartIcon> 
                            </button>

                          </BoxItems> 
                              
                      </PriceProductsContainer>
                  </ItemsProduct> 
                )})}
            </ContainerItemsProduct>
        </ContainerProducts>
    </div>
    )
}