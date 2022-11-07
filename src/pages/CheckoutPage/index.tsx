import { Header } from "../../components/Header";
import { BodyPage, BoxPayment, BoxSelection, BoxTextPayment, ButtonsConfirm, ButtonsPayment, ButtonsSelection, ContainerBanana, ContainerForm, ContainerInput, ContainerPayment, ContainerSelection, InputBairro, InputCep, InputCidade, InputComplemento, InputNumber, InputRua, InputUF, PurchasedProducts, Text, TextNoCoffee, TextValue, TextValueContainer, Title } from "./styles";
import Local from "../../assets/CheckoutPage/local.svg"

import Icon1 from "../../assets/CheckoutPage/Icon1.svg"
import Dinheiro from "../../assets/CheckoutPage/Icon2.svg"
import Banco from "../../assets/CheckoutPage/Icon3.svg"
import Cartao from "../../assets/CheckoutPage/Icon4.svg"
import Remove from "../../assets/CheckoutPage/Remove.svg"
import { priceFormatter } from "../../utils/formatter";
import { CounterContent } from "../../components/CounterComponent";
import { ContextContents } from "../../context/Context";
import { useContext } from "react";
import { ClipboardText } from "phosphor-react";

export function CheckoutPage() {

    const { cart } = useContext(ContextContents)

    

    return(
        <div>
        
            <Header />

            <Text>Complete seu cadastro</Text>

        <BodyPage>

            <ContainerBanana>
               
            <ContainerForm>

            <h3> <img src={Local} /> Endereço de Entrega </h3>
            
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <div><InputCep type="text" placeholder="CEP"/></div>

            <div><InputRua type="text" placeholder="Rua" /></div>
            
            <ContainerInput> <InputNumber type="text" placeholder="Numero" /> <InputComplemento type="Complemento" placeholder="Complemento" /> </ContainerInput>

            <ContainerInput> <InputBairro type="text" placeholder="Bairro" /> <InputCidade type="text" placeholder="Cidade" /> <InputUF type="text" placeholder="UF" /> </ContainerInput>       
           
            </ContainerForm>

            <ContainerPayment> 

            <BoxTextPayment>
                <h3> <img src={Icon1}/>Pagamento</h3>    
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </BoxTextPayment>

            <BoxPayment>

                <ButtonsPayment value="card"> <img src={Cartao}/>  Cartão de crédito</ButtonsPayment> 
                <ButtonsPayment value="bank"> <img src={Banco}/>cartão de débito</ButtonsPayment> 
                <ButtonsPayment value="money"> <img src={Dinheiro}/>dinheiro</ButtonsPayment>

            </BoxPayment>

            </ContainerPayment>
        
            </ContainerBanana>    

            <ContainerSelection> 
        
            {cart.coffees.map((coffeC)=>{



                return(
                    <BoxSelection> 

                    <Title>{coffeC.type}</Title>
                
                <PurchasedProducts>
                
                            <img src={coffeC.image}/> 
                
                            <CounterContent /> 
                
                            <ButtonsSelection >     
                
                            <img src={Remove} /> Remover
                
                            </ButtonsSelection> 
                
                            <p>{priceFormatter.format(coffeC.price)}</p> 

                </PurchasedProducts>
                
            </BoxSelection>
                )
            })} 
           

                { cart.coffees.length > 0 ? 
                    <TextValueContainer>
                        <TextValue><p>Total de itens</p> <p>{priceFormatter.format(cart.totalItems)}</p></TextValue>
                        <TextValue><p>Entrega</p> <p>{priceFormatter.format(cart.deliveryValue)}</p></TextValue>                
                        <TextValue><h3>Total</h3> <h3>{priceFormatter.format(cart.total)}</h3></TextValue>
                        <ButtonsConfirm>confirmar pedido</ButtonsConfirm>
                    </TextValueContainer>
                :
                <TextNoCoffee>
                 <ClipboardText size={100} />
                 <p> Nenhum café foi adicionado a lista.</p>
                </TextNoCoffee>
                }

        </ContainerSelection>

        </BodyPage>



        </div>
    )
}
