import { useContext } from "react";
import { ContextContents } from "../../context/Context";
import { ButtonAddRemove, Counter } from "./styled";
const { cart, HandleAddCoffee, HandleRemoveCoffee } = useContext(ContextContents)

export function CounterContent() {

    return(
      <Counter> 
                                
            <ButtonAddRemove  onClick={HandleAddCoffee}>-</ButtonAddRemove> 
            
            <span>{cart.count}</span> 
            
            <ButtonAddRemove onClick={HandleRemoveCoffee}>+</ButtonAddRemove> 
                            
        </Counter>
    )
}