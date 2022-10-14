import { Header } from "../../components/Header";
import { ContainerBanana, ContainerForm, ContainerInput, ContainerPayment, ContainerSelection, InputBairro, InputCep, InputCidade, InputComplemento, InputNumber, InputRua, InputUF, Text } from "./styles";
import { ContainerCounter } from "../../components/CounterComponent";
import Local from "../../assets/CheckoutPage/local.svg"

import Icon1 from "../../assets/CheckoutPage/Icon1.svg"
import Dinheiro from "../../assets/CheckoutPage/Icon2.svg"
import Banco from "../../assets/CheckoutPage/Icon3.svg"
import Cartao from "../../assets/CheckoutPage/Icon4.svg"

export function CheckoutPage() {
    return(
        <div>
        
            <Header />

            <Text>Complete seu cadastro</Text>

            <ContainerBanana>
               
            <ContainerForm>

            <h3> <img src={Local} /> Endereço de Entrega </h3>
            
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <div><InputCep type="text" placeholder="CEP"/></div>

            <div><InputRua type="text" placeholder="Rua" /></div>
            
            <ContainerInput> <InputNumber type="text" placeholder="Numero" /> <InputComplemento type="Complemento" placeholder="CEP" /> </ContainerInput>

            <ContainerInput> <InputBairro type="text" placeholder="Bairro" /> <InputCidade type="text" placeholder="Cidade" /> <InputUF type="text" placeholder="UF" /> </ContainerInput>       
           
            </ContainerForm>

            <ContainerSelection> <div> <ContainerCounter /> </div> </ContainerSelection>
                
            </ContainerBanana>    

            <ContainerPayment> 

                <p>
                    <h3> <img src={Icon1}/>Pagamento</h3>    
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>

                <button> <img src={Cartao}/>  Cartão de crédito</button> <button> <img src={Banco}/>cartão de débito</button> <button> <img src={Dinheiro}/>dinheiro</button>
 
            </ContainerPayment>

        </div>
    )
}