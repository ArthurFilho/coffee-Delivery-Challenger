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
import { useNavigate } from "react-router-dom";


export function CheckoutPage() {

    const { ResetCoffeesList, OnAddForm, HandleAddQuantityCoffee, HandleRemoveQuantityCoffee, cart , HandleDeleteCoffee } = useContext(ContextContents)
   
    const { register, handleSubmit, control, reset} = useForm()

    const navigate = useNavigate();

    function handleFormSucess(data:any){
        OnAddForm(data)
        reset()
        navigate("/sucesspage")
        ResetCoffeesList()
    }    

 

    let disabled = cart.coffees.length > 0;

    return(
        <div>
        
            <Header />


            <Text>Complete seu registro</Text>

        <BodyPage onSubmit={handleSubmit(handleFormSucess)}>

        
        
            <ContainerBanana>
               
            <ContainerForm >

            <h3> <img src={Local} /> Endereço de Entrega </h3>
            
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <div>
                
                <InputCep 
                disabled={!disabled} 
                placeholder="CEP" 
                {...register('cep')}
                 required/>
                 
            </div>
         
            <div>
            
                <InputRua 
                disabled={!disabled}
                placeholder="Rua" 
                {...register('rua')}
                 required/>
            
            </div>
            
            <ContainerInput> 
                
                <InputNumber 
                disabled={!disabled}  
                placeholder="Numero" 
                {...register('numero')} 
                required /> 
                
                <InputComplemento 
                type="Complemento" 
                disabled={!disabled} 
                placeholder="Complemento" 
                {...register('complemento')} 
                required /> 
                
            </ContainerInput>

            <ContainerInput> 
                
                <InputBairro 
                disabled={!disabled}  
                placeholder="Bairro" 
                {...register('bairro')} 
                required /> 
                
                <InputCidade type="text" 
                disabled={!disabled} 
                placeholder="Cidade" 
                {...register('cidade')} 
                required /> 
                
                <InputUF 
                type="text" 
                disabled={!disabled} 
                placeholder="UF" 
                {...register('uf')} 
                required /> 
                </ContainerInput>       
           
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
                <BoxPayment disabled={!disabled} required onValueChange={field.onChange} value={field.value}>

                <ButtonsPayment 
                value="crédito">
                <img src={Cartao}/>  Cartão de crédito
                </ButtonsPayment> 
                
                <ButtonsPayment 
                value="débito"> 
                <img src={Banco}/>cartão de débito
                </ButtonsPayment> 
                
                <ButtonsPayment 
                value="dinheiro"> 
                <img src={Dinheiro}/>dinheiro
                </ButtonsPayment>

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
                        <ButtonsConfirm type="submit"  >confirmar pedido</ButtonsConfirm> 
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

{/* <NavLink to="/sucesspage"></NavLink> */}