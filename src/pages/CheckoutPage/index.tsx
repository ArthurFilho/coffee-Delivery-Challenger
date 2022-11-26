import { Header } from "../../components/Header";
import { BodyPage, BoxPayment, BoxSelection, BoxTextPayment, ButtonsConfirm, ButtonsPayment, ButtonsSelection, ContainerBanana, ContainerForm, ContainerInput, ContainerPayment, ContainerSelection, InputBairro, InputCep, InputCidade, InputComplemento, InputNumber, InputRua, InputUF, PurchasedProducts, Text, TextNoCoffee, TextValue, TextValueContainer, Title } from "./styles";
import Local from "../../assets/CheckoutPage/local.svg"
import Icon1 from "../../assets/CheckoutPage/Icon1.svg"
import Dinheiro from "../../assets/CheckoutPage/Icon2.svg"
import Banco from "../../assets/CheckoutPage/Icon3.svg"
import Cartao from "../../assets/CheckoutPage/Icon4.svg"
import Remove from "../../assets/CheckoutPage/Remove.svg"
import { priceFormatter } from "../../utils/formatter";
import { CoffeeProps, ContextContents } from "../../context/Context";
import { useContext } from "react";
import { ClipboardText } from "phosphor-react";
import { ButtonAddRemove, ButtonDisabled, Counter } from "../../styles/CountStyle";
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from "react-router-dom";



export function CheckoutPage() {

    const { OnAddForm, HandleAddQuantityCoffee, HandleRemoveQuantityCoffee, cart , HandleDeleteCoffee } = useContext(ContextContents)
   
    const { register, handleSubmit, control} = useForm()

    function handleFormSucess(data:any){
        OnAddForm(data)
    }    

    return(
        <div>
        
            <Header />

            <Text>Complete seu {}</Text>

        <BodyPage onSubmit={handleSubmit(handleFormSucess)}>

            <ContainerBanana>
               
            <ContainerForm >

            <h3> <img src={Local} /> Endereço de Entrega </h3>
            
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <div><InputCep placeholder="CEP" {...register('cep')} required/></div>

            <div><InputRua placeholder="Rua" {...register('rua')} required/></div>
            
            <ContainerInput> <InputNumber   placeholder="Numero" {...register('numero')} required /> <InputComplemento type="Complemento" placeholder="Complemento" {...register('complemento')} required /> </ContainerInput>

            <ContainerInput> <InputBairro   placeholder="Bairro" {...register('bairro')} required /> <InputCidade type="text" placeholder="Cidade" {...register('cidade')} required /> <InputUF type="text" placeholder="UF" {...register('uf')} required /> </ContainerInput>       
           
            </ContainerForm>

            <ContainerPayment> 

            <BoxTextPayment>
                <h3> <img src={Icon1}/>Pagamento</h3>    
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </BoxTextPayment>

           <Controller
           control={control}
           name="paymentModels"
           render={( { field } )=> {
            return(
                <BoxPayment onValueChange={field.onChange} value={field.value}>

                <ButtonsPayment value="crédito"> <img src={Cartao}/>  Cartão de crédito</ButtonsPayment> 
                <ButtonsPayment value="débito"> <img src={Banco}/>cartão de débito</ButtonsPayment> 
                <ButtonsPayment value="dinheiro"> <img src={Dinheiro}/>dinheiro</ButtonsPayment>

                </BoxPayment>
            )
           }}
           />

            </ContainerPayment>
        
            </ContainerBanana>    

            <ContainerSelection> 
        
            {cart.coffees.map((coffeeC: CoffeeProps)=>{
                return(
                    <BoxSelection key={coffeeC.id}> 

                    <Title>{coffeeC.type}</Title>
                
                        <PurchasedProducts>
                
                            <img src={coffeeC.image}/> 
                
                            <Counter> 
                                 {coffeeC.quantity <= 1 ? 
                                <ButtonDisabled onClick={() => {}}>-</ButtonDisabled>
                                 :
                                 <ButtonAddRemove  onClick={() => HandleRemoveQuantityCoffee(coffeeC.id)}> - </ButtonAddRemove>
                                 } 
                                 
                                 <span> {coffeeC.quantity} </span> 
                                 
                                 <ButtonAddRemove onClick={() => HandleAddQuantityCoffee(coffeeC.id)}> + </ButtonAddRemove> 
                                                 
                             </Counter> 
                
                            <ButtonsSelection onClick={() => HandleDeleteCoffee(coffeeC.id)}>     
                
                            <img src={Remove} /> Remover
                
                            </ButtonsSelection> 
                
                            <p>{priceFormatter.format(cart.totalItems)}</p> 

                        </PurchasedProducts>
                
                    </BoxSelection>
                )
            })} 
           

                { cart.coffees.length > 0 ? 
                    <TextValueContainer>
                        <TextValue><p>Total de itens</p> <p>{priceFormatter.format(cart.totalItems)}</p></TextValue>
                        <TextValue><p>Entrega</p> <p>{priceFormatter.format(cart.deliveryValue)}</p></TextValue>                
                        <TextValue><h3>Total</h3> <h3>{priceFormatter.format(cart.total)}</h3></TextValue>
                        <ButtonsConfirm type="submit" onClick={handleFormSucess} >confirmar pedido</ButtonsConfirm> 
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