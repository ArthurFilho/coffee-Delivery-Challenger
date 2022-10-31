import { BoxItems, ButtonAdd, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { CounterContent } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";
import { useContext } from "react";
import { ContextContents} from "../../context/Context";
import Cart from "../../assets/ProductsForSale/Cart.svg"

interface CoffeeProps {
    id: number | string
    description: string
    type: string
    price: number
    title: string
    image: void
} 


export function ProductsForSale(){
    
    const { Coffees } = useContext(ContextContents)
    
    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                {Coffees.map((coffee:CoffeeProps)=> {
                    return(
                    <ItemsProduct> 

                    <ImageContainer> <img src={coffee.image}/> </ImageContainer>
                  
                      <TypeCoffeText>{coffee.title}</TypeCoffeText>
                  
                      <TitleText>{coffee.type}</TitleText> 
  
                      <DescriptionText>{coffee.description}</DescriptionText>
                      
                      <PriceProductsContainer> 
                          
                          <span>{priceFormatter.format(coffee.price)}</span> 
                          
                          <BoxItems>  
                              
                              <CounterContent />
                            
                            <ButtonAdd id={coffee.id}>
                              <CartIcon> 
                              
                                  <img src={Cart} /> 
                                  
                              </CartIcon> 
                            </ButtonAdd>

                          </BoxItems> 
                              
                      </PriceProductsContainer>
                  </ItemsProduct> 
                )})}
            </ContainerItemsProduct>
        </ContainerProducts>
    </div>
    )
}