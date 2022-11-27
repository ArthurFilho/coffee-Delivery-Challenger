import { Header } from "../../components/Header";
import { C, ContainerAllThings, ContainerTextMain, ContainerValue, Text, TextMain } from "./styles";
import Ilustration from "../../assets/SucessPage/Illustration.svg"
import Loc from "../../assets/SucessPage/IconLoc.svg"
import House from "../../assets/SucessPage/IconHouse.svg"
import Cifrao from "../../assets/SucessPage/IconCifrão.svg"
import { useContext } from "react";
import { ContextContents } from "../../context/Context";



export function SucessPage(){

    const { forms } = useContext(ContextContents)
    
    return(
        <div>
        <Header />

        <ContainerTextMain>

        <TextMain> Uhu, Pedido foi confirmado!!!</TextMain> 

        <Text>Agora é só aguardar que logo o café chegará até você!!</Text>

        </ContainerTextMain>

        <ContainerAllThings>
            
        <ContainerValue>
            
            <C>
                <img src={Loc}/>
            <div>
            <h4>Entrega em <strong> {forms.bairro}, {forms.rua} </strong></h4>
            <p> {forms.cidade} - {forms.uf} </p>
            </div>
            </C>
            
            <C>
            <img src={House}/>
            <div>
            <h4>Previsão de entrega</h4>
            <strong> 20 min - 30 min </strong>
            </div>
            </C>
            
            <C>
            <img src={Cifrao}/>
            <div>
            <h4> Pagamento na entrega </h4>
            <p> {forms.paymentModels} </p>
            </div>
            </C>
        
        </ContainerValue>

        
        <div>
            <img src={Ilustration} />
        </div>
        
        </ContainerAllThings>
        
        </div>
    )
}