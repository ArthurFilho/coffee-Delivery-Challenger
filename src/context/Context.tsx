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
    titleSecondary?: string
    image: any
    quantity: number
   } 
   
   interface InformationSellCoffee {
      rua: string;
      cidade: string;
      paymentModels: string;
      uf: string;
      bairro: string;
   }

   interface CoffeeCart  {
    coffees: CoffeeProps[],
    totalItems: number
    total: number
    deliveryValue: number
   }

   interface ContextType {
    Coffees: CoffeeProps[];
    cart: CoffeeCart;
    forms: any;
    HandleNewCoffee: (coffee:CoffeeProps) => void;
    HandleDeleteCoffee: (removeCoffee:CoffeeProps) => void;
    HandleAddQuantityCoffee: (CoffeeId:number) => void;
    HandleRemoveQuantityCoffee: (CoffeeId:number) => void;
    OnAddForm: (data:any) => void;
    ResetCoffeesList: () => void;
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
    quantity: 1,
  },
  {
    id: 2,
    title: 'Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 29.90,
    type: 'Expresso Americano',
    image: CoffeeAmericano,
    quantity: 1,
  },
  {
    id: 3,
    title: 'Tradicional',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    type: 'Expresso Cremoso',
    image: CoffeeCremoso,
    quantity: 1,
  },
  {
    id: 4,
    title: 'Tradicional gelado',
    titleSecondary: ' gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    type: 'Expresso Gelado',
    image: CoffeeGelado,
    quantity: 1,
  },
  {
    id: 5,
    title: 'Tradicional com leite',
    titleSecondary: 'com leite',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    type: 'Latte',
    image: CoffeeLatte,
    quantity: 1,
  },
  {
    id: 6,
    title: 'Tradicional',
    titleSecondary: 'com leite',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    type: 'Capuccino',
    image: CoffeeCapuccino,
    quantity: 1,
  },
  {
    id: 7,
    title: 'Tradicional',
    titleSecondary: 'com leite',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    type: 'Macchiato',
    image: CoffeeMacchiato,
    quantity: 1,
  },
  {
    id: 8,
    title: 'Tradicional',
    titleSecondary: 'com leite',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    type: 'Mocaccino',
    image: CoffeeMocaccino,
    quantity: 1,
  },
  {
    id: 9,
    title: 'Tradicional',
    titleSecondary: 'com leite',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    type: 'Chocolate Quente',
    image: CoffeeChocolateQuente,
    quantity: 1,
  },
  {
    id: 10,
    title: 'Especial ',
    titleSecondary: 'alcoólico gelado',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 50.90,
    type: 'Cubano',
    image: CoffeeCubano,
    quantity: 1,
  },
  {
    id: 11,
    title: 'Especial',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    type: 'Havaiano',
    image: CoffeHavaiano,
    quantity: 1,
  },
  {
    id: 12,
    title: 'Especial',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    type: 'Árabe',
    image: CoffeeArabe,
    quantity: 1,
  },
  {
    id: 13,
    title: 'Especial',
    titleSecondary: 'alcoólico',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    type: 'Irlandês',
    image: CoffeeIrlandes,
    quantity: 1,
  },
  {
    id: 14,
    title: 'Especial',
    description: 'Bebida a base de café, com grãos tritutados e alguns espessos',
    price: 9.90,
    type: 'Turcano',
    image: CoffeeCremoso,
    quantity: 1,
  },
  {
    id: 15,
    title: 'Especial',
    titleSecondary: 'alcoólico',
    description: 'Bebida a base de café, chocolate, açúcar e chantilly e nutella',
    price: 9.90,
    type: 'Inglês',
    image: CoffeeCubano,
    quantity: 1,
  },
  {
    id: 16,
    title: 'Especial',
    titleSecondary: 'alcoólico gelado',
    description: 'Bebida a base de café, chocolate, açúcar, chantilly, cachaça, leite e nutella',
    price: 12.90,
    type: 'Holandês',
    image: CoffeeMacchiato,
    quantity: 1,
  },
  ]

  
export const ContextContents = createContext({} as ContextType)
const getCart = localStorage.getItem('@Coffee-Delivery:state-Cart-1.0.0');
const cartStorage = getCart ? JSON.parse(getCart) : {
  coffees: [],
  totalItems: 0,
  total: 0,
  deliveryValue: 4.10,
  };

export function ContextProvider({children}: ContextProviderProps) {

  const [cart, setCart] = useState<CoffeeCart>(cartStorage)
 
    const [forms, setForms] = useState<InformationSellCoffee>({
      rua: '',
      cidade: '',
      paymentModels: '',
      uf: '',
      bairro: '',
    });
   
    function HandleNewCoffee(newCoffe:CoffeeProps) {
      const haveCoffee = cart.coffees.find(coffee => coffee.id == newCoffe.id)
      if(haveCoffee){
        const myCoffees = cart.coffees.map( coffee => {
          if(coffee.id == newCoffe.id){
            return {
              ...coffee, 
              quantity: coffee.quantity + newCoffe.quantity
            }
          } else{
            return coffee;
          }
        })
        setCart(prevState => {
         return {
          ...prevState,
          coffees: myCoffees
         } 
        })
      } else{
        setCart(prevState => {
          return{
            ...prevState,
            coffees: [newCoffe, ...prevState.coffees]
            }
          }
        )  
      }   
    }


     function HandleAddQuantityCoffee(CoffeeId:number) {
       const newCoffee = cart.coffees.map(valor => {
        if(valor.id == CoffeeId) {
        let copia = {...valor};
        copia.quantity = copia.quantity + 1;
        return copia;
        } else {
        return valor;
        }
        })
        
        setCart(state => {
          return{
            ...state,
            coffees: [...newCoffee]
          }
        }
      )
     }


     function HandleRemoveQuantityCoffee (CoffeeId:number) {
      let newCoffee = cart.coffees.map(valor => {
        if(valor.id == CoffeeId) {
        let copia = {...valor};
        copia.quantity = copia.quantity - 1;
        return copia;
        } else {
        return valor;
        }
        }
        )
        
        setCart(state => {
          return{
            ...state,
            coffees: [...newCoffee]
          }
        }
      )
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

     function OnAddForm(data:any){
      setForms(data)
     }

     useEffect(()=>{
      console.log(forms)
     }, [forms])
     
     let dependenceValue = cart.coffees;

    useEffect(()=>{
      let counter = cart.coffees.reduce(
        (acc, coffee) => {
          acc.totalItems = acc.totalItems + (coffee.price * coffee.quantity)
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
        }, [dependenceValue])

        function ResetCoffeesList(){
          setCart(state => {
            return{
              ...state,
              coffees: []
            }
          }
          )
        }

        useEffect(()=>{
          const stateJSON = JSON.stringify(cart)

          localStorage.setItem('@Coffee-Delivery:state-Cart-1.0.0', stateJSON)
        }, [cart])


    return (
        <ContextContents.Provider
          value={{
            Coffees,
            cart,
            forms,
            HandleAddQuantityCoffee,
            HandleRemoveQuantityCoffee,
            HandleNewCoffee,
            HandleDeleteCoffee,
            OnAddForm,
            ResetCoffeesList,
          }}
        >
          {children}
        </ContextContents.Provider>
      )
     }