import { BoxItems, CartIcon, ContainerItemsProduct, ContainerProducts, DescriptionText, HeaderText, ImageContainer, ItemsProduct, PriceProductsContainer, TitleText, TypeCoffeText } from "./styles";
import { ContainerCounter } from "../CounterComponent";
import { priceFormatter } from "../../utils/formatter";


import CoffeeNormal from "../../assets/ProductsForSale/Coffee.svg"
import CoffeeAmericano from "../../assets/ProductsForSale/Americano.svg"
import CoffeeCremoso from "../../assets/ProductsForSale/Cremoso.svg"
import CoffeeGelado from "../../assets/ProductsForSale/CafeGelado.svg"
import CoffeeLatte from "../../assets/ProductsForSale/Latte.svg"
import CoffeeCapuccino from "../../assets/ProductsForSale/Capuccino.svg"
import CoffeeMacchiato from "../../assets/ProductsForSale/Macchiato.svg"
import CoffeeMocaccino from "../../assets/ProductsForSale/Mocaccino.svg"
import CoffeeChocolateQuente from "../../assets/ProductsForSale/ChocolateQuente.svg"
import CoffeeCubano from "../../assets/ProductsForSale/Cubano.svg"
import CoffeHavaiano from "../../assets/ProductsForSale/Havaiano.svg"
import CoffeeArabe from "../../assets/ProductsForSale/Árabe.svg"
import CoffeeIrlandes from "../../assets/ProductsForSale/Irlandês.svg"
import Cart from "../../assets/ProductsForSale/Cart.svg"

// interface CoffeeProps {
//     id: number
//     description: string
//     type: string
//     price: number
//     title: string
//   }

export function ProductsForSale(){
    
    const response = [
        {
          id: 1,
          title: 'Tradicional',
          description: 'O tradicional café feito com água quente e grãos moídos',
          price: 10,
          type: 'Expresso Tradicional',
          image: CoffeeNormal,
        },
        {
          id: 2,
          title: 'Tradicional',
          description: 'Expresso diluído, menos intenso que o tradicional',
          price: 29.90,
          type: 'Expresso Americano',
          image: CoffeeAmericano,
        },
        {
          id: 3,
          title: 'Tradicional',
          description: 'Café expresso tradicional com espuma cremosa',
          price: 9.90,
          type: 'Expresso Cremoso',
          image: CoffeeCremoso,
        },
        {
          id: 4,
          title: 'Tradicional gelado',
          description: 'Bebida preparada com café expresso e cubos de gelo',
          price: 9.90,
          type: 'Expresso Gelado',
          image: CoffeeGelado,
        },
        {
          id: 5,
          title: 'Tradicional com leite',
          description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
          price: 9.90,
          type: 'Latte',
          image: CoffeeLatte,
        },
        {
          id: 6,
          title: 'Tradicional com leite',
          description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
          price: 9.90,
          type: 'Capuccino',
          image: CoffeeCapuccino,
        },
        {
          id: 7,
          title: 'Tradicional com leite',
          description: 'Café expresso misturado com um pouco de leite quente e espuma',
          price: 9.90,
          type: 'Macchiato',
          image: CoffeeMacchiato,
        },
        {
          id: 8,
          title: 'Tradicional com leite',
          description: 'Café expresso com calda de chocolate, pouco leite e espuma',
          price: 9.90,
          type: 'Mocaccino',
          image: CoffeeMocaccino,
        },
        {
          id: 9,
          title: 'Tradicional com leite',
          description: 'Bebida feita com chocolate dissolvido no leite quente e café',
          price: 9.90,
          type: 'Chocolate Quente',
          image: CoffeeChocolateQuente,
        },
        {
          id: 10,
          title: 'Especial alcoólico gelado',
          description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
          price: 9.90,
          type: 'Cubano',
          image: CoffeeCubano,
        },
        {
          id: 11,
          title: 'Especial',
          description: 'Bebida adocicada preparada com café e leite de coco',
          price: 9.90,
          type: 'Havaiano',
          image: CoffeHavaiano,
        },
        {
          id: 12,
          title: 'Especial',
          description: 'Bebida preparada com grãos de café árabe e especiarias',
          price: 9.90,
          type: 'Árabe',
          image: CoffeeArabe,
        },
        {
          id: 13,
          title: 'Especial alcoólico',
          description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
          price: 9.90,
          type: 'Irlandês',
          image: CoffeeIrlandes,
        },
        {
          id: 14,
          title: 'Especial',
          description: 'Bebida a base de café, com grãos tritutados e alguns espessos',
          price: 9.90,
          type: 'Turcano',
          image: CoffeeCremoso,
        },
        {
          id: 15,
          title: 'Especial alcoólico',
          description: 'Bebida a base de café, cholate, açúcar e chantilly',
          price: 9.90,
          type: 'Inglês',
          image: CoffeeCubano,
        },
        ]
    
    
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