import { Header } from "../../components/Header";
import { C, ContainerAllThings, ContainerValue } from "./styles";
import Ilustration from "../../assets/SucessPage/Illustration.svg"
import Loc from "../../assets/SucessPage/IconLoc.svg"
import House from "../../assets/SucessPage/IconHouse.svg"
import Cifrao from "../../assets/SucessPage/IconCifrão.svg"


export function SucessPage(){
    return(
        <div>
        <Header />

        <ContainerAllThings>

            
        <ContainerValue>
            
            <C>
                <img src={Loc}/>
            <div>
            <h4>Entrega em Rua João Daniel Martinelli, 102</h4>
            <p>  - Salvador, BA </p>
            </div>
            </C>
            
            <C>
            <img src={House}/>
            <div>
            <h4>Previsão de entrega</h4>
            <p> 20 min - 30 min </p>
            </div>
            </C>
            
            <C>
            <img src={Cifrao}/>
            <div>
            <h4> Pagamento na entrega </h4>
            <p> Cartão de Crédito </p>
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