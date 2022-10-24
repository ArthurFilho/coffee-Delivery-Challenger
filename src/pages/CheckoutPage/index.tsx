import { Header } from "../../components/Header";
import { BoxPayment, BoxSelection, BoxTextPayment, ButtonsConfirm, ButtonsPayment, ButtonsSelection, ContainerBanana, ContainerForm, ContainerInput, ContainerPayment, ContainerSelection, InputBairro, InputCep, InputCidade, InputComplemento, InputNumber, InputRua, InputUF, PurchasedProducts, Text, TextValue, TextValueContainer, Title } from "./styles";
import { ContainerCounter } from "../../components/CounterComponent";
import Local from "../../assets/CheckoutPage/local.svg"

import Icon1 from "../../assets/CheckoutPage/Icon1.svg"
import Dinheiro from "../../assets/CheckoutPage/Icon2.svg"
import Banco from "../../assets/CheckoutPage/Icon3.svg"
import Cartao from "../../assets/CheckoutPage/Icon4.svg"
import Remove from "../../assets/CheckoutPage/Remove.svg"
import CoffeeNormal from "../../assets/CheckoutPage/CoffeeNormal.svg"

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

        <ContainerSelection> 
        
            <BoxSelection> 

            <Title>Tradicional</Title>
                
                <PurchasedProducts>
                
                            <img src={CoffeeNormal}/> 
                
                            <ContainerCounter /> 
                
                        <ButtonsSelection>     
                
                            <img src={Remove} /> Remover
                
                        </ButtonsSelection> 
                
                            <p>9, 90</p> 
                </PurchasedProducts>
                
            </BoxSelection> 

            <BoxSelection> 

            <Title>Tradicional</Title>

                <PurchasedProducts>
                

                            <img src={CoffeeNormal}/> 
                
                            <ContainerCounter /> 

                        <ButtonsSelection>     
                
                            <img src={Remove} /> Remover
                
                        </ButtonsSelection> 
                
                            <p>9, 90</p> 
                </PurchasedProducts>
            </BoxSelection> 

            <TextValueContainer>
                    <TextValue><p>Total de itens</p> <p>R$ 29,70</p></TextValue>
                    <TextValue><p>Entrega</p> <p>R$ 29,70</p></TextValue>                
                    <TextValue><p>Total</p> <p>R$ 29,70</p></TextValue>
                    <ButtonsConfirm>confirmar pedido</ButtonsConfirm>
            </TextValueContainer>

        </ContainerSelection>

        
                
            </ContainerBanana>    

            <ContainerPayment> 

                <BoxTextPayment>
                    <h3> <img src={Icon1}/>Pagamento</h3>    
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </BoxTextPayment>
                
                <BoxPayment>
                
                    <ButtonsPayment> <img src={Cartao}/>  Cartão de crédito</ButtonsPayment> 
                    <ButtonsPayment> <img src={Banco}/>cartão de débito</ButtonsPayment> 
                    <ButtonsPayment> <img src={Dinheiro}/>dinheiro</ButtonsPayment>
                
                </BoxPayment>
           
            </ContainerPayment>

        </div>
    )
}