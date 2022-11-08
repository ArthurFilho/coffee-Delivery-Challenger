import { createContext, ReactNode, useEffect, useState } from "react"
import CoffeeNormal from "../assets/ProductsForSale/Coffee.svg"
import CoffeeAmericano from "../assets/ProductsForSale/Americano.svg"
import CoffeeCremoso from "../assets/ProductsForSale/Cremoso.svg"
import CoffeeGelado from "../assets/ProductsForSale/CafeGelado.svg"
import CoffeeLatte from "../assets/ProductsForSale/Latte.svg"
import CoffeeCapuccino from "../assets/ProductsForSale/Capuccino.svg"
import CoffeeMacchiato from "../assets/ProductsForSale/Macchiato.svg"
import CoffeeMocaccino from "../assets/ProductsForSale/Mocaccino.svg"
import CoffeeChocolateQuente from "../assets/ProductsForSale/ChocolateQuente.svg"
import CoffeeCubano from "../assets/ProductsForSale/Cubano.svg"
import CoffeHavaiano from "../assets/ProductsForSale/Havaiano.svg"
import CoffeeArabe from "../assets/ProductsForSale/Árabe.svg"
import CoffeeIrlandes from "../assets/ProductsForSale/Irlandês.svg"


export interface CoffeeProps  {
    id: any
    description: string
    type: string
    price: number
    title: string
    image: any
    quantity: number
   } 
   
   interface CoffeeCart  {
    coffees: CoffeeProps[],
    totalItems: number
    total: number
    deliveryValue: number
    count: number
   }

interface ContextType {
  Coffees: CoffeeProps[];
  cart: CoffeeCart;
  HandleNewCoffee: (coffee:CoffeeProps) => void;
  HandleDeleteCoffee: (removeCoffee:CoffeeProps) => void;
  HandleAddCoffeeQuantity:() => void;
  HandleRemoveCoffeeQuantity:() => void;
}

interface ContextProviderProps {
  children: ReactNode
}


export const Coffees: Array<CoffeeProps> = [
  {
    id: 1,
    title: 'Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 10,
    type: 'Expresso Tradicional',
    image: CoffeeNormal,
    quantity: count,
  },
  {
    id: 2,
    title: 'Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 29.90,
    type: 'Expresso Americano',
    image: CoffeeAmericano,
    quantity: count,
  },
  {
    id: 3,
    title: 'Tradicional',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    type: 'Expresso Cremoso',
    image: CoffeeCremoso,
    quantity: count,
  },
  {
    id: 4,
    title: 'Tradicional gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    type: 'Expresso Gelado',
    image: CoffeeGelado,
    quantity: count,
  },
  {
    id: 5,
    title: 'Tradicional com leite',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    type: 'Latte',
    image: CoffeeLatte,
    quantity: count,
  },
  {
    id: 6,
    title: 'Tradicional com leite',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    type: 'Capuccino',
    image: CoffeeCapuccino,
    quantity: count,
  },
  {
    id: 7,
    title: 'Tradicional com leite',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    type: 'Macchiato',
    image: CoffeeMacchiato,
    quantity: count,
  },
  {
    id: 8,
    title: 'Tradicional com leite',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    type: 'Mocaccino',
    image: CoffeeMocaccino,
    quantity: count,
  },
  {
    id: 9,
    title: 'Tradicional com leite',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    type: 'Chocolate Quente',
    image: CoffeeChocolateQuente,
    quantity: count,
  },
  {
    id: 10,
    title: 'Especial alcoólico gelado',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 50.90,
    type: 'Cubano',
    image: CoffeeCubano,
    quantity: count,
  },
  {
    id: 11,
    title: 'Especial',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    type: 'Havaiano',
    image: CoffeHavaiano,
    quantity: count,
  },
  {
    id: 12,
    title: 'Especial',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    type: 'Árabe',
    image: CoffeeArabe,
    quantity: count,
  },
  {
    id: 13,
    title: 'Especial alcoólico',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    type: 'Irlandês',
    image: CoffeeIrlandes,
    quantity: count,
  },
  {
    id: 14,
    title: 'Especial',
    description: 'Bebida a base de café, com grãos tritutados e alguns espessos',
    price: 9.90,
    type: 'Turcano',
    image: CoffeeCremoso,
    quantity: count,
  },
  {
    id: 15,
    title: 'Especial alcoólico',
    description: 'Bebida a base de café, cholate, açúcar e chantilly',
    price: 9.90,
    type: 'Inglês',
    image: CoffeeCubano,
    quantity: count,
  },
  ]

  
export const ContextContents = createContext({} as ContextType)

export function ContextProvider({children}: ContextProviderProps) {

  const [cart, setCart] = useState<CoffeeCart>({
    coffees: [],
    totalItems: 0,
    total: 0,
    deliveryValue: 4.10,
    count: 0,
    })

     function HandleNewCoffee(newCoffe:CoffeeProps) {
      
      setCart(prevState => {
        return{
          ...prevState,
          coffees: [newCoffe, ...prevState.coffees]
      }})
     }

     function HandleDeleteCoffee(coffeeToDelete:any) {
      const filterCoffee = cart.coffees.filter( cart => 
       coffeeToDelete !== cart.id
       )
       setCart(state => {
        return {
          ...state,
          coffees: [...filterCoffee],
        }
       }
      ) 
     }
     function HandleAddCoffeeQuantity() {
      let counter = cart.coffees.reduce(
        (acc) => {
          if(cart.count <= 0){
          return () => {}
          }
          else{ 
          return acc.count - 1
          }
        },
        {
          count: count,
        },
        )
        setCart(
          state => { 
            return{
          ...state,
          count: counter.count,
              }
            }
          )
      // cart.count <= 0 ? () => {} : () => setCart((count) => count - 1)
     }

     function HandleRemoveCoffeeQuantity() {
      let counter = cart.coffees.reduce(
        (acc) => {
          acc.count + 1
          return acc
        },
        {
          count: 0,
        },
        )
      setCart(
        state => { 
          return{
        ...state,
        count: counter.count,
            }
          }
        )
     }

    useEffect(()=>{
      let counter = cart.coffees.reduce(
        (acc, coffee) => {
          acc.totalItems = acc.totalItems + coffee.price
          acc.total = acc.totalItems + acc.deliveryValue
          return acc
        },
        {
          totalItems: 0,
          deliveryValue: 4.10,
          total: 0,
        },
      )
setCart(prevValue => {
  return  {
  coffees: [...prevValue.coffees],
  totalItems: counter.totalItems,
  total: counter.total,  
  deliveryValue: counter.deliveryValue,
          }
    }
) 
}, [cart.coffees.length])

 
   

    return (
        <ContextContents.Provider
          value={{
            Coffees,
            cart,
            HandleAddCoffeeQuantity,
            HandleRemoveCoffeeQuantity,
            HandleNewCoffee,
            HandleDeleteCoffee,
          }}
        >
          {children}
        </ContextContents.Provider>
      )
     }