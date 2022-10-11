import { ButtonAddRemove, Counter } from "./styled";

export function ContainerCounter () {
    return(
        <Counter> 
                                
                            <ButtonAddRemove>-</ButtonAddRemove> 
                            
                            <span>5</span> 
                            
                            <ButtonAddRemove>+</ButtonAddRemove> 
                            
        </Counter> 
    )
}