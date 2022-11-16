import { BoxItems, ButtonAdd, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useContext, useState } from "react";
import { ContextContents} from "../../context/Context";
import Cart from "../../assets/ProductsForSale/Cart.svg"
import { ButtonAddRemove, ButtonDisabled, Counter } from "../../styles/CountStyle";


export function ProductsForSale(){
    
    const { Coffees, HandleNewCoffee,  } = useContext(ContextContents)

    const [ copyCoffee, setCopyCoffee] = useState(Coffees)
    
    function HandleAddQuantityCoffeeHome(CoffeeId:number) {
        const newCoffee = copyCoffee.map(valor => {
         if(valor.id == CoffeeId) {
         let copia = {...valor};
         copia.quantity = copia.quantity + 1;
         return copia;
         } else {
         return valor;
         }
        }
    )
         setCopyCoffee([...newCoffee])
      }

      function HandleRemoveQuantityCoffeeHome (CoffeeId:number) {
        let newCoffee = copyCoffee.map(valor => {
          if(valor.id == CoffeeId) {
          let copia = {...valor};
          copia.quantity = copia.quantity - 1;
          return copia;
          } else {
          return valor;
          }
        }
    )
          setCopyCoffee([...newCoffee])
       }


    return(
        <div>

            <HeaderText>Nossos cafés</HeaderText>

        <ContainerProducts>
            <ContainerItemsProduct> 
                {copyCoffee.map((coffee)=> {
                    return(
                    <ItemsProduct key={coffee.id}>

                    <ImageContainer> <img src={coffee.image}/> </ImageContainer>
                  
                      <TypeCoffeText>{coffee.title}</TypeCoffeText>
                  
                      <TitleText>{coffee.type}</TitleText> 
  
                      <DescriptionText>{coffee.description}</DescriptionText>
                      
                      <PriceProductsContainer> 
                          
                          <span>{priceFormatter.format(coffee.price * coffee.quantity)}</span> 
                          
                          <BoxItems>  
                              
                             <Counter> 
                                {coffee.quantity <= 1 ? 
                                <ButtonDisabled onClick={() => {}}>-</ButtonDisabled>
                                 :
                                 <ButtonAddRemove  onClick={() => HandleRemoveQuantityCoffeeHome(coffee.id)}> - </ButtonAddRemove>
                                 } 
                                 
                                 <span> {coffee.quantity} </span> 
                                 
                                 <ButtonAddRemove onClick={() => {HandleAddQuantityCoffeeHome(coffee.id)}}>+</ButtonAddRemove> 
                                                 
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