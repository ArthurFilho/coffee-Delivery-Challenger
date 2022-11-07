import { BoxItems, ButtonAdd, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { CounterContent } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";
import { useContext } from "react";
import { ContextContents} from "../../context/Context";
import Cart from "../../assets/ProductsForSale/Cart.svg"


export function ProductsForSale(){
    
    const { Coffees, HandleNewCoffee } = useContext(ContextContents)
    
    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                {Coffees.map((coffee)=> {
                    return(
                    <ItemsProduct key={coffee.id}> 

                    <ImageContainer> <img src={coffee.image}/> </ImageContainer>
                  
                      <TypeCoffeText>{coffee.title}</TypeCoffeText>
                  
                      <TitleText>{coffee.type}</TitleText> 
  
                      <DescriptionText>{coffee.description}</DescriptionText>
                      
                      <PriceProductsContainer> 
                          
                          <span>{priceFormatter.format(coffee.price)}</span> 
                          
                          <BoxItems>  
                              
                              <CounterContent />
                            
                            <ButtonAdd onClick={() => HandleNewCoffee(coffee)}>
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