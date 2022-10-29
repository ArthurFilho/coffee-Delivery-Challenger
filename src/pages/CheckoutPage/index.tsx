import { Header } from "../../components/Header";
import { BodyPage, BoxPayment, BoxSelection, BoxTextPayment, ButtonsConfirm, ButtonsPayment, ButtonsSelection, ContainerBanana, ContainerForm, ContainerInput, ContainerPayment, ContainerSelection, InputBairro, InputCep, InputCidade, InputComplemento, InputNumber, InputRua, InputUF, PurchasedProducts, Text, TextValue, TextValueContainer, Title } from "./styles";
import { ContainerCounter } from "../../components/CounterComponent";
import Local from "../../assets/CheckoutPage/local.svg"

import Icon1 from "../../assets/CheckoutPage/Icon1.svg"
import Dinheiro from "../../assets/CheckoutPage/Icon2.svg"
import Banco from "../../assets/CheckoutPage/Icon3.svg"
import Cartao from "../../assets/CheckoutPage/Icon4.svg"
import Remove from "../../assets/CheckoutPage/Remove.svg"
import CoffeeNormal from "../../assets/CheckoutPage/CoffeeNormal.svg"
import { priceFormatter } from "../../utils/formatter";

export function CheckoutPage() {
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
            
            <ContainerInput> <InputNumber type="text" placeholder="Numero" /> <InputComplemento type="Complemento" placeholder="CEP" /> </ContainerInput>

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
        
            <BoxSelection> 

            <Title>Tradicional</Title>
                
                <PurchasedProducts>
                
                            <img src={CoffeeNormal}/> 
                
                            <ContainerCounter /> 
                
                        <ButtonsSelection>     
                
                            <img src={Remove} /> Remover
                
                        </ButtonsSelection> 
                
                            <p>{priceFormatter.format(9.90)}</p> 
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
                
                            <p>{priceFormatter.format(9.90)}</p> 
                </PurchasedProducts>
                
            </BoxSelection> 
           

            <TextValueContainer>
                    <TextValue><p>Total de itens</p> <p>R$ 29,70</p></TextValue>
                    <TextValue><p>Entrega</p> <p>R$ 29,70</p></TextValue>                
                    <TextValue><h3>Total</h3> <h3>R$ 29,70</h3></TextValue>
                    <ButtonsConfirm>confirmar pedido</ButtonsConfirm>
            </TextValueContainer>

        </ContainerSelection>

        </BodyPage>



        </div>
    )
}


// import { TransactionsContext } from '../contexts/TransactionsContexts'

// export function useSummary() {
//   const transactions = useContextSelector(TransactionsContext, (context) => {
//     return context.transactions
//   })

//   const summary = transactions.reduce(
//     (acc, transaction) => {
//       if (transaction.type === 'income') {
//         acc.income += transaction.price
//         acc.total += transaction.price
//       } else {
//         acc.outcome += transaction.price
//         acc.total -= transaction.price
//       }

//       return acc
//     },
//     {
//       income: 0,
//       outcome: 0,
//       total: 0,
//     },
//   )

//   return summary
// }