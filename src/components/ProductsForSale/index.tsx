import { BoxItems, ButtonAdd, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useContext } from "react";
import { ContextContents} from "../../context/Context";
import Cart from "../../assets/ProductsForSale/Cart.svg"
import { ButtonAddRemove, Counter } from "../../styles/CountStyle";


export function ProductsForSale(){
    
    const { HandleAddQuantityCoffee, HandleRemoveQuantityCoffee, Coffees, HandleNewCoffee,  } = useContext(ContextContents)
    
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
                              
                             <Counter> 
                                 
                                 <ButtonAddRemove  onClick={HandleAddQuantityCoffee}>-</ButtonAddRemove> 
                                 
                                 <span> {coffee.quantity} </span> 
                                 
                                 <ButtonAddRemove onClick={HandleRemoveQuantityCoffee}>+</ButtonAddRemove> 
                                                 
                             </Counter> 
                            
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