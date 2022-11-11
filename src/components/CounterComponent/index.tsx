import { useContext } from "react";
import { ContextContents } from "../../context/Context";
import { ButtonAddRemove, Counter } from "./styled";


export function CounterContent() {

    const { Coffees, HandleAddQuantityCoffee, HandleRemoveQuantityCoffee } = useContext(ContextContents)

    return(
      <Counter> 
                                
            <ButtonAddRemove  onClick={HandleAddQuantityCoffee}>-</ButtonAddRemove> 
            
            <span> {Coffees.map((coffee) => {return(coffee.quantity)})} </span> 
            
            <ButtonAddRemove onClick={HandleRemoveQuantityCoffee}>+</ButtonAddRemove> 
                            
        </Counter>
    )
}