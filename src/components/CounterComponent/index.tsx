import { useState } from "react";
import { ButtonAddRemove, Counter } from "./styled";

export function ContainerCounter () {

    const [count, setCount] = useState(0)
    return(
        <Counter> 
                                
            <ButtonAddRemove  onClick={count <= 0 ? () => {} : () => setCount((count) => count - 1)}>-</ButtonAddRemove> 
            
            <span>{count}</span> 
            
            <ButtonAddRemove onClick={() => setCount((count) => count + 1)}>+</ButtonAddRemove> 
                            
        </Counter> 
    )
}