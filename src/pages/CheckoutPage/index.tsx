import { Header } from "../../components/Header";
import { ContainerBanana, ContainerForm, ContainerPayment, ContainerSelection, Text } from "./styles";
import Local from "../../assets/CheckoutPage/local.svg"
import { ContainerCounter } from "../../components/CounterComponent";

export function CheckoutPage() {
    return(
        <div>
        
            <Header />

            <Text>Complete seu cadastro</Text>

            <ContainerBanana>
               
            <ContainerForm>

            <h3> <img src={Local} /> Endereço de Entrega </h3>
            
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <input type="text" placeholder="CEP"/>

            <input type="text" placeholder="Rua" />
            
            <div> <input type="text" placeholder="Numero" /> <input type="Complemento" placeholder="CEP" /> </div>

            <div> <input type="text" placeholder="Bairro" /> <input type="text" placeholder="Cidade" /> <input type="text" placeholder="UF" /> </div>       
           
            </ContainerForm>

            <ContainerPayment> <div> <ContainerCounter /> </div> </ContainerPayment>

            <ContainerSelection> </ContainerSelection>
                
            </ContainerBanana>    
            
        </div>
    )
}