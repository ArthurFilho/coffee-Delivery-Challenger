import { BoxItems, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import CoffeNormal from "../../assets/ProductsForSale/Coffee.svg"
import Cart from "../../assets/ProductsForSale/Cart.svg"
import { ContainerCounter } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";

export function ProductsForSale(){
    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                <ItemsProduct> 

                  <ImageContainer> <img src={CoffeNormal}/> </ImageContainer>
                
                    <TypeCoffeText>Tradicional</TypeCoffeText>
                
                    <TitleText>Expresso Tradicional</TitleText> 

                    <DescriptionText>O tradicional café feito com água quente e grãos moídos</DescriptionText>
                    
                    <PriceProductsContainer> 
                        
                        <span>{priceFormatter.format(9)}</span> 
                        
                        <BoxItems>  
                            
                            <ContainerCounter />

                            <CartIcon> 
                            
                                <img src={Cart} /> 
                                
                            </CartIcon> 
                            
                        </BoxItems> 
                            
                    </PriceProductsContainer>
                
                </ItemsProduct> 
            </ContainerItemsProduct>
        </ContainerProducts>
        </div>
    )
}


// {priceFormatter.format()}