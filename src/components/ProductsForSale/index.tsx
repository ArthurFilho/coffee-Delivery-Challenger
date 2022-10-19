import { BoxItems, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { ContainerCounter } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";

import Cart from "../../assets/ProductsForSale/Cart.svg"


export function ProductsForSale(){
    
    
    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                {response.map((response)=> {
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
  
                              <CartIcon> 
                              
                                  <img src={Cart} /> 
                                  
                              </CartIcon> 
                              
                          </BoxItems> 
                              
                      </PriceProductsContainer>
                  </ItemsProduct> 
                )})}
            </ContainerItemsProduct>
        </ContainerProducts>
    </div>
    )
}